import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
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

export const fetchFieldName = createAsyncThunk<FieldName, string>(
  "fetchFieldName",
  async (id) => {
    return await api.getFieldName(id);
  }
);

const slice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFieldName.pending, (state) => {
      state.fieldName = undefined;
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(fetchFieldName.fulfilled, (state, action) => {
      state.fieldName = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(fetchFieldName.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const selectDetails = (state: RootState) => state.details;
export const selectDetailsFieldName = createSelector(
  selectDetails,
  (state) => state.fieldName
);
export const selectDetailsError = createSelector(
  selectDetails,
  (state) => state.error
);
export const selectDetailsIsLoading = createSelector(
  selectDetails,
  (state) => state.loading !== Loading.Idle
);

export const detailsReducer = slice.reducer;
