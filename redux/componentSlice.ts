import { RootState } from "./store";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateProps = {};

const initialState: stateProps = {};

const componentSlice = createSlice({
  name: "component",
  initialState: { ...initialState },
  reducers: {
    helloWorld: () => {
      console.log("Hello world!");
    },
  },
});

export const { helloWorld } = componentSlice.actions;
export const selectComponent = (state: RootState) => state.component;
export default componentSlice.reducer;
