import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import fieldNames from "./fieldNames";

const rootReducer = combineReducers({
  counter,
  fieldNames,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
