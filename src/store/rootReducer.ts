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

/**
 * App root reducer that combines all other reducers/slices.
 */
export const rootReducer = combineReducers({
  featured: featuredReducer,
  search: searchReducer,
  users: usersReducer,
  settings: settingsReducer,
  details: detailsReducer,
  submit: submitReducer,
});

/**
 * App root state.
 * 
 * The type is inferred from the root reducer.
 */
export type RootState = ReturnType<typeof rootReducer>;
