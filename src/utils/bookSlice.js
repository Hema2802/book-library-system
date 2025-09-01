<<<<<<< HEAD

// import create slice from redux toolkit

import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    // added book process
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
=======

// import create slice from redux toolkit

import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    // added book process
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
>>>>>>> b63fd2c6263252ab5897b49648971d70fe0a43e5
export default bookSlice.reducer;