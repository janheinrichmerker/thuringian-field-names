import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { getMaps, getMarkings } from "../api";
import { Loading } from "../model";

export interface FieldNamesState {
  loading: Loading;
  fieldNames: Array<any>;
  error?: string;
}

export const fetchFieldNames = createAsyncThunk("fetchFieldNames", async () => {
  const markings = (await getMarkings()).response.docs;
  const maps = (await getMaps()).response.docs;
  return [...markings, ...maps];
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
export const selectFieldNamesLoading = createSelector(
  selectFieldNames,
  (fieldNames) => fieldNames.loading
);

export default slice.reducer;
