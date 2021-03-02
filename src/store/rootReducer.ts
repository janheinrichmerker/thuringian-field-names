import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import fieldNames from "./fieldNames";

const rootReducer = combineReducers({
  fieldNames,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
