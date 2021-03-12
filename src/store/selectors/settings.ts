import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

// Selectors for easy usage in React using the `useSelector()` hook.
export const selectSettings = (state: RootState) => state.settings;
export const selectSettingsLocale = createSelector(
  selectSettings,
  (state) => state.locale
);
