// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './Slice'; // Import your slice

export const store = configureStore({
  reducer: {
    postData: PostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
