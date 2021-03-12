import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import FieldNamesApi from "../../api/fieldNames";
import { FieldNameSnippet, Loading } from "../../model";

const api = new FieldNamesApi();

export interface SearchState {
  loading: Loading;
  results: Array<FieldNameSnippet>;
  error?: string;
}

const initialState: SearchState = {
  results: [],
  loading: Loading.Idle,
};

export const searchFieldNames = createAsyncThunk<
  Array<FieldNameSnippet>,
  string
>("searchFieldNames", async (query) => {
  const fieldNames = await api.searchFieldNames(query);
  return fieldNames;
});

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    emptySearch: (state) => {
      state.results = [];
      state.error = undefined;
      state.loading = Loading.Idle;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchFieldNames.pending, (state) => {
      state.results = [];
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(searchFieldNames.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(searchFieldNames.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const { emptySearch } = slice.actions;

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

export const searchReducer = slice.reducer;
