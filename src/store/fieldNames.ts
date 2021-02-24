import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { getFieldNames } from "../api";
import { FieldNameSnippet, Loading } from "../model";

export interface FieldNamesState {
  loading: Loading;
  fieldNames: Array<FieldNameSnippet>;
  error?: string;
}

export const fetchFieldNames = createAsyncThunk("fetchFieldNames", async () => {
  return await getFieldNames();
});

const slice = createSlice({
  name: "fieldNames",
  initialState: {
    fieldNames: [],
    loading: Loading.Idle,
    error: undefined,
  } as FieldNamesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFieldNames.pending, (state, action) => {
      state.fieldNames = [];
      state.loading = Loading.Pending;
    });
    builder.addCase(fetchFieldNames.fulfilled, (state, action) => {
      state.fieldNames = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(fetchFieldNames.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

// export const {} = slice.actions;

export const selectFieldNames = (state: RootState) => state.fieldNames;
export const selectFieldNamesList = createSelector(
  selectFieldNames,
  (fieldNames) => fieldNames.fieldNames
);
export const selectFieldNamesError = createSelector(
  selectFieldNames,
  (fieldNames) => fieldNames.error
);
export const selectFieldNamesIsLoading = createSelector(
  selectFieldNames,
  (fieldNames) => fieldNames.loading !== Loading.Idle
);

export default slice.reducer;
