import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import FieldNamesApi from "../api/fieldNames";
import { FieldNameSnippet, Loading } from "../model";

const api = new FieldNamesApi();

export interface FieldNamesState {
  loading: Loading;
  fieldNames: Array<FieldNameSnippet>;
  error?: string;
}

const initialState: FieldNamesState = {
  fieldNames: [],
  loading: Loading.Idle,
};

export const fetchFieldNames = createAsyncThunk("fetchFieldNames", async () => {
  return await api.getFieldNames();
});

const slice = createSlice({
  name: "fieldNames",
  initialState,
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
  (state) => state.fieldNames
);
export const selectFieldNamesError = createSelector(
  selectFieldNames,
  (state) => state.error
);
export const selectFieldNamesIsLoading = createSelector(
  selectFieldNames,
  (state) => state.loading !== Loading.Idle
);

export default slice.reducer;
