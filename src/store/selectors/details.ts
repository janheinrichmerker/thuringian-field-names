import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Loading } from "../../model";

// Selectors for easy usage in React using the `useSelector()` hook.
export const selectDetails = (state: RootState) => state.details;
export const selectDetailsFieldName = createSelector(
  selectDetails,
  (state) => state.fieldName
);
export const selectDetailsError = createSelector(
  selectDetails,
  (state) => state.error
);
export const selectDetailsIsLoading = createSelector(
  selectDetails,
  (state) => state.loading !== Loading.Idle
);
