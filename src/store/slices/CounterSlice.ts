import { createSlice } from '@reduxjs/toolkit';

export interface StateInterface {
  counterSlice: {
    keys: string[];
    secretWord: string | null;
    showConfetti: boolean;
    showSearch: boolean;
  };
}

export const initialState = {
  keys: ['first', 'second', 'third'],
  secretWord: null,
  showConfetti: false,
  showSearch: false,
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
    setShowConfetti: (state, action) => {
      state.showConfetti = action.payload;
    },
    setShowSearch: (state, action) => {
      state.showSearch = action.payload;
    },
  },
});

export const { increment, setSecretWord, setShowConfetti, setShowSearch } =
  counterSlice.actions;
export default counterSlice.reducer;
