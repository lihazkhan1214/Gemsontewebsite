import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleData } from '@/constants';

interface ArticleState {
  data: ArticleData[];
}

// Load data from local storage if available, otherwise initialize with an empty array
const initialState: ArticleState = {
  data: JSON.parse(localStorage.getItem('articleData') || '[]'),
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setDataArticle: (state, action: PayloadAction<ArticleData[]>) => {
      state.data = action.payload;
      // Save data to local storage whenever it's updated
      localStorage.setItem('articleData', JSON.stringify(action.payload));
    },
  },
});

export const { setDataArticle } = articleSlice.actions;

export default articleSlice.reducer;
