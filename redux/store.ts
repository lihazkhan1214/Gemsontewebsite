// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './Slice'; // Import your slice
import ArticleReducer from './ArticleSlice';

export const store = configureStore({
  reducer: {
    postData: PostReducer,
    articleData:ArticleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
