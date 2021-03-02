import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import UsersApi from "../api/users";
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
>("login", async ({ nameOrEmail, password }) => {
  return await api.login(nameOrEmail, password);
});
export const register = createAsyncThunk<
  User,
  {
    name: string;
    email: string;
    password: string;
  }
>("register", async ({ name, email, password }) => {
  return await api.register(name, email, password);
});

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: state => {
      state.active = undefined;
      state.loading = Loading.Idle;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.active = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.active = action.payload;
      state.error = undefined;
      state.loading = Loading.Idle;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
    builder.addCase(register.pending, state => {
      state.active = undefined;
      state.loading = Loading.Pending;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.active = action.payload;
      state.error = undefined;
      state.loading = Loading.Idle;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const { logout } = slice.actions;

export const selectUsers = (state: RootState) => state.users;
export const selectUsersActive = createSelector(
  selectUsers,
  state => state.active
);
export const selectUsersIsActive = createSelector(
  selectUsers,
  state => state.active !== undefined
);
export const selectUsersError = createSelector(
  selectUsers,
  state => state.error
);
export const selectUsersIsLoading = createSelector(
  selectUsers,
  state => state.loading !== Loading.Idle
);

export const usersReducer = slice.reducer;
