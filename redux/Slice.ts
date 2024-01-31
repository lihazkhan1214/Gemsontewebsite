// dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostData from '@/constants/index';

interface PostDataState {
  data: PostData[];
}

const initialState: PostDataState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<PostData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
