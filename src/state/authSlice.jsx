import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const initialState = {
  loading: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setTokenStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    setTokenSuccess: (state, { payload: token }) => {
      state.loading = false;
      state.error = null;
      state.token = token;
    },
    setTokenFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const { setTokenStart, setTokenSuccess, setTokenFailure } =
  authSlice.actions;

export default authSlice.reducer;

export const authReducerSelector = (state) => state[authSlice.name];

export const tokenSelector = createSelector(
  authReducerSelector,
  ({ token, loading, error }) => ({ token, loading, error })
);
