import { RootState } from "./store";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

type authProps = {
  isAuth: boolean;
};

const initialState: authProps = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    login: () => {
      console.log("Hello world!");
    },
  },
});

export const { login } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
