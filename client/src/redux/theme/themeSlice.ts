import { createSlice } from "@reduxjs/toolkit";
// npm i redux
// npm i react-redux
// npm i @types/react-redux
// npm i @reduxjs/toolkit

const initialState = false;

// createSlice = createAction + createReducer 액션 + 리듀서
// redux-toolkit

const themeSlice = createSlice({
  // A name, used in action types
  name: "theme",

  // The initial state for the reducer
  initialState,

  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    toggle(state) {
      return !state;
    },
  },
});

export default themeSlice;
