import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { fieldNamesReducer } from "./fieldNames";
import { settingsReducer } from "./settings";
import { searchReducer } from "./search";

export const rootReducer = combineReducers({
  fieldNames: fieldNamesReducer,
  search: searchReducer,
  users: usersReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
