import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { UsersApi } from "../api";
import { Loading, User } from "../model";

const api = new UsersApi();

export interface UserState {
  active?: User;
  loading: Loading;
  error?: string;
}

const initialState: UserState = {
  loading: Loading.Idle,
};

export const login = createAsyncThunk<
  User,
  {
    nameOrEmail: string;
    password: string;
  }
>("fetchFieldNames", async ({ nameOrEmail, password }) => {
  return await api.login(nameOrEmail, password);
});
export const register = createAsyncThunk<
  User,
  {
    name: string;
    email: string;
    password: string;
  }
>("fetchFieldNames", async ({ name, email, password }) => {
  return await api.register(name, email, password);
});

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.active = undefined;
      state.loading = Loading.Idle;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.active = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.active = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
    builder.addCase(register.pending, (state, action) => {
      state.active = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.active = action.payload;
      state.loading = Loading.Idle;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const { logout } = slice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectUserActive = createSelector(
  selectUser,
  (state) => state.active
);
export const selectUserIsActive = createSelector(
  selectUser,
  (state) => state.active !== undefined
);
export const selectUserError = createSelector(
  selectUser,
  (state) => state.error
);
export const selectUserIsLoading = createSelector(
  selectUser,
  (state) => state.loading !== Loading.Idle
);

export default slice.reducer;
