import { createSlice } from '@reduxjs/toolkit';

export const initialState = ['first', 'second', 'third'];

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      var index = state.indexOf(action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return state;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
