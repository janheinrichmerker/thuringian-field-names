import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

/**
 * Search field name snippets by query.
 */
export const searchFieldNames = createAsyncThunk<
  Array<FieldNameSnippet>,
  string
>("searchFieldNames", async (query) => {
  const fieldNames = await api.searchFieldNames(query);
  return fieldNames;
});

/**
 * Create a slice for loading search result field name snippets.
 */
const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    /**
     * Clear the search result list.
     */
    emptySearch: (state) => {
      state.results = [];
      state.error = undefined;
      state.loading = Loading.Idle;
    },
  },
  extraReducers: (builder) => {
    // Update state when a search request is started.
    builder.addCase(searchFieldNames.pending, (state) => {
      state.results = [];
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    // Update state when a search request completed successfully.
    builder.addCase(searchFieldNames.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = Loading.Idle;
    });
    // Update state when a search request completed with an error.
    builder.addCase(searchFieldNames.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const { emptySearch } = slice.actions;

export const searchReducer = slice.reducer;
