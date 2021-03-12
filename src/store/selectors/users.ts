import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Loading } from "../../model";

// Selectors for easy usage in React using the `useSelector()` hook.
export const selectUsers = (state: RootState) => state.users;
export const selectUsersActive = createSelector(
  selectUsers,
  (state) => state.active
);
export const selectUsersIsActive = createSelector(
  selectUsers,
  (state) => state.active !== undefined
);
export const selectUsersError = createSelector(
  selectUsers,
  (state) => state.error
);
export const selectUsersIsLoading = createSelector(
  selectUsers,
  (state) => state.loading !== Loading.Idle
);
