import { combineReducers } from "@reduxjs/toolkit";
// Don't import reducers from ".", as the dependency loop
// causes issues in Redux.
import {
  usersReducer,
  featuredReducer,
  settingsReducer,
  searchReducer,
  detailsReducer,
  submitReducer,
} from "./slices";

export const rootReducer = combineReducers({
  featured: featuredReducer,
  search: searchReducer,
  users: usersReducer,
  settings: settingsReducer,
  details: detailsReducer,
  submit: submitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
