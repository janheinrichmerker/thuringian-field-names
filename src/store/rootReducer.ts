import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";

const rootReducer = combineReducers({
  counter: counter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
