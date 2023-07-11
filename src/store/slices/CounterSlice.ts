import { createSlice } from '@reduxjs/toolkit';

export interface StateInterface {
  counterSlice: { keys: string[]; secretWord: string | null };
}

export const initialState = {
  keys: ['first', 'second', 'third'],
  secretWord: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      var index = state.keys.indexOf(action.payload);
      if (index !== -1) {
        state.keys.splice(index, 1);
      }
      return state;
    },
    setSecretWord: (state, action) => {
      state.secretWord = action.payload;
    },
  },
});

export const { increment, setSecretWord } = counterSlice.actions;
export default counterSlice.reducer;
