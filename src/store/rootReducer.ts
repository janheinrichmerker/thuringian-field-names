import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { featuredReducer } from "./featured";
import { settingsReducer } from "./settings";
import { searchReducer } from "./search";

export const rootReducer = combineReducers({
  featured: featuredReducer,
  search: searchReducer,
  users: usersReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
