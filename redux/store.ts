import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import componentSlice from "./componentSlice";

const store = configureStore({
  reducer: {
    component: componentSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
