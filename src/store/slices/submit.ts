import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
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

export const submit = createAsyncThunk<true, FieldNameInput>(
  "submit",
  async (input) => await api.submit(input)
);

const slice = createSlice({
  name: "submit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submit.pending, (state) => {
      state.success = undefined;
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(submit.fulfilled, (state, action) => {
      state.success = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(submit.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const selectSubmit = (state: RootState) => state.submit;
export const selectSubmitSuccess = createSelector(
  selectSubmit,
  (state) => state.success
);
export const selectSubmitError = createSelector(
  selectSubmit,
  (state) => state.error
);
export const selectSubmitIsLoading = createSelector(
  selectSubmit,
  (state) => state.loading !== Loading.Idle
);

export const submitReducer = slice.reducer;
