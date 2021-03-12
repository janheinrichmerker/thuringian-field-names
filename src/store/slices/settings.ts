import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  locale: string;
}

const initialState: SettingsState = {
  locale: navigator.language,
};

/**
 * Create a slice for loading and storing settings.
 */
const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /**
     * Update the selected locale for localization.
     */
    updateLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { updateLocale } = slice.actions;

export const settingsReducer = slice.reducer;
