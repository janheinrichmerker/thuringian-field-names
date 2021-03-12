import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Loading } from "../../model";

// Selectors for easy usage in React using the `useSelector()` hook.
export const selectFeatured = (state: RootState) => state.featured;
export const selectFeaturedSnippets = createSelector(
  selectFeatured,
  (state) => state.fieldNames
);
export const selectFeaturedError = createSelector(
  selectFeatured,
  (state) => state.error
);
export const selectFeaturedIsLoading = createSelector(
  selectFeatured,
  (state) => state.loading !== Loading.Idle
);
