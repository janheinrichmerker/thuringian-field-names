import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Loading } from "../../model";

// Selectors for easy usage in React using the `useSelector()` hook.
export const selectSearch = (state: RootState) => state.search;
export const selectSearchResults = createSelector(
  selectSearch,
  (state) => state.results
);
export const selectSearchError = createSelector(
  selectSearch,
  (state) => state.error
);
export const selectSearchIsLoading = createSelector(
  selectSearch,
  (state) => state.loading !== Loading.Idle
);
