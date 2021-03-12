import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FieldNamesApi from "../../api/fieldNames";
import { FieldNameSnippet, Loading } from "../../model";

const api = new FieldNamesApi();

export interface FeaturedState {
  loading: Loading;
  fieldNames: Array<FieldNameSnippet>;
  error?: string;
}

const initialState: FeaturedState = {
  fieldNames: [],
  loading: Loading.Idle,
};

/**
 * Fetch featured field name snippets.
 */
export const fetchFeaturedFieldNames = createAsyncThunk(
  "fetchFeaturedFieldNames",
  async () => {
    const featured = await api.getFieldNames(undefined, undefined, 5);
    // TODO shuffle field names.
    return featured;
  }
);

/**
 * Create a slice for loading featured field name snippets.
 */
const slice = createSlice({
  name: "featured",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Update state when a featured field names request is started.
    builder.addCase(fetchFeaturedFieldNames.pending, (state) => {
      state.fieldNames = [];
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    // Update state when a featured field names request completed successfully.
    builder.addCase(fetchFeaturedFieldNames.fulfilled, (state, action) => {
      state.fieldNames = action.payload;
      state.loading = Loading.Idle;
    });
    // Update state when a featured field names request completed with an error.
    builder.addCase(fetchFeaturedFieldNames.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const featuredReducer = slice.reducer;
