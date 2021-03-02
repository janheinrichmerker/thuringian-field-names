import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { fieldNamesReducer } from "./fieldNames";

export const rootReducer = combineReducers({
  fieldNames: fieldNamesReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
