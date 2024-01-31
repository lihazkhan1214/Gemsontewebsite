// articleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleData } from '@/constants/index';

interface ArticleState {
  data: ArticleData[];
}

const initialState: ArticleState = {
  data: [],
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setDataArticle: (state, action: PayloadAction<ArticleData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setDataArticle } = articleSlice.actions;

export default articleSlice.reducer;
