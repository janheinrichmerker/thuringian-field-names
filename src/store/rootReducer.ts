import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import fieldNames from "./fieldNames";

const rootReducer = combineReducers({
  fieldNames,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
