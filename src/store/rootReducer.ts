import { combineReducers } from "@reduxjs/toolkit";
import {
  usersReducer,
  featuredReducer,
  settingsReducer,
  searchReducer,
  detailsReducer,
} from "./slices"; // Don't import from ".", as the dependency loop causes issues in Redux.

export const rootReducer = combineReducers({
  featured: featuredReducer,
  search: searchReducer,
  users: usersReducer,
  settings: settingsReducer,
  details: detailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
