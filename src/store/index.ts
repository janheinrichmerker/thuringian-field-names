import { configureStore } from "@reduxjs/toolkit";
import { connect, Connect } from "react-redux";
import rootReducer, { RootState } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
export default store;

export type { RootState } from "./rootReducer";
export type AppDispatch = typeof store.dispatch;

export const connectApp: Connect<RootState> = connect;

export * from "./counter"