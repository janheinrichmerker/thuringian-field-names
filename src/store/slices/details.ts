import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FieldNameApi from "../../api/fieldName";
import { FieldName, Loading } from "../../model";

const api = new FieldNameApi();

export interface DetailsState {
  loading: Loading;
  fieldName?: FieldName;
  error?: string;
}

const initialState: DetailsState = {
  loading: Loading.Idle,
};

/**
 * Fetch a single field name by its ID.
 */
export const fetchFieldName = createAsyncThunk<FieldName, string>(
  "fetchFieldName",
  async (id) => {
    return await api.getFieldName(id);
  }
);

/**
 * Create a slice for loading individual field name details.
 */
const slice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Update state when a field name details request is started.
    builder.addCase(fetchFieldName.pending, (state) => {
      state.fieldName = undefined;
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    // Update state when a field name details request completed successfully.
    builder.addCase(fetchFieldName.fulfilled, (state, action) => {
      state.fieldName = action.payload;
      state.loading = Loading.Idle;
    });
    // Update state when a field name details request completed with an error.
    builder.addCase(fetchFieldName.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const detailsReducer = slice.reducer;
