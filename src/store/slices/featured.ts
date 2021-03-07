import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
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

export const fetchFeaturedFieldNames = createAsyncThunk(
  "fetchFeaturedFieldNames",
  async () => {
    const featured = await api.getFieldNames(undefined, undefined, 5);
    // TODO shuffle field names.
    return featured;
  }
);

const slice = createSlice({
  name: "featured",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedFieldNames.pending, (state) => {
      state.fieldNames = [];
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(fetchFeaturedFieldNames.fulfilled, (state, action) => {
      state.fieldNames = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(fetchFeaturedFieldNames.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const selectFeatured = (state: RootState) => state.featured;
export const selectFeaturedSnippets = createSelector(
  selectFeatured,
  (state) => state.fieldNames
);
export const selectFeaturedError = createSelector(
  selectFeatured,
  (state) => state.error
);
export const selectFeaturedIsLoading = createSelector(
  selectFeatured,
  (state) => state.loading !== Loading.Idle
);

export const featuredReducer = slice.reducer;
