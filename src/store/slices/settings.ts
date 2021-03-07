import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface SettingsState {
  locale: string;
}

const initialState: SettingsState = {
  locale: navigator.language,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { updateLocale } = slice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectSettingsLocale = createSelector(
  selectSettings,
  (state) => state.locale
);

export const settingsReducer = slice.reducer;
