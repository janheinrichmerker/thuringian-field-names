import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { fieldNamesReducer } from "./fieldNames";
import { settingsReducer } from "./settings";

export const rootReducer = combineReducers({
  fieldNames: fieldNamesReducer,
  users: usersReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
