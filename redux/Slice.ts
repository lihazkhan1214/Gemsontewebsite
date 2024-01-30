import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostData  from '@/constants/index';

interface PostDataState {
  data: PostData[];
}

// Define a function to get data from localStorage safely
const getInitialData = (): PostData[] => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('postData');
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
};

// Load data from local storage if available, otherwise initialize with an empty array
const initialState: PostDataState = {
  data: getInitialData(),
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<PostData[]>) => {
      state.data = action.payload;
      // Save data to local storage whenever it's updated
      if (typeof window !== 'undefined') {
        localStorage.setItem('postData', JSON.stringify(action.payload));
      }
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
