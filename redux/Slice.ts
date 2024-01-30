import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostData from '@/constants/index';

interface PostDataState {
  data: PostData[];
}

// Load data from local storage if available, otherwise initialize with an empty array
const initialState: PostDataState = {
  data: JSON.parse(localStorage.getItem('postData') || '[]'),
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<PostData[]>) => {
      state.data = action.payload;
      // Save data to local storage whenever it's updated
      localStorage.setItem('postData', JSON.stringify(action.payload));
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
