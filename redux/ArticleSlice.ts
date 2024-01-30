import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleData } from '@/constants'; // Assuming '@/constants' is the correct path

interface ArticleState {
  data: ArticleData[];
}

// Load data from local storage if available, otherwise initialize with an empty array
const initialState: ArticleState = {
  data: getInitialData(),
};

// Define a function to get data from localStorage safely
function getInitialData(): ArticleData[] {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('articleData');
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setDataArticle: (state, action: PayloadAction<ArticleData[]>) => {
      state.data = action.payload;
      // Save data to local storage whenever it's updated
      if (typeof window !== 'undefined') {
        localStorage.setItem('articleData', JSON.stringify(action.payload));
      }
    },
  },
});

export const { setDataArticle } = articleSlice.actions;

export default articleSlice.reducer;
