import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SubmitApi from "../../api/submit";
import { FieldNameInput, Loading } from "../../model";

const api = new SubmitApi();

export interface SubmitState {
  success?: true;
  loading: Loading;
  error?: string;
}

const initialState: SubmitState = {
  loading: Loading.Idle,
};

/**
 * Submit a field name suggestion.
 */
export const submit = createAsyncThunk<true, FieldNameInput>(
  "submit",
  async (input) => await api.submit(input)
);

/**
 * Create a slice for submitting field name suggestions.
 */
const slice = createSlice({
  name: "submit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Update state when a submit request is started.
    builder.addCase(submit.pending, (state) => {
      state.success = undefined;
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    // Update state when a submit request completed successfully.
    builder.addCase(submit.fulfilled, (state, action) => {
      state.success = action.payload;
      state.loading = Loading.Idle;
    });
    // Update state when a submit request completed with an error.
    builder.addCase(submit.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const submitReducer = slice.reducer;
