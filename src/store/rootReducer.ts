import { combineReducers } from "@reduxjs/toolkit";
import {
  usersReducer,
  featuredReducer,
  settingsReducer,
  searchReducer,
} from ".";

export const rootReducer = combineReducers({
  featured: featuredReducer,
  search: searchReducer,
  users: usersReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
