import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersApi from "../../api/users";
import { Loading, User } from "../../model";

const api = new UsersApi();

export interface UserState {
  active?: User;
  loading: Loading;
  error?: string;
}

const initialState: UserState = {
  loading: Loading.Idle,
};

/**
 * Sign into an existing user account.
 */
export const login = createAsyncThunk<
  User,
  {
    nameOrEmail: string;
    password: string;
  }
>("login", async ({ nameOrEmail, password }) => {
  return await api.login(nameOrEmail, password);
});

/**
 * Sign up for a new user account.
 */
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

/**
 * Create a slice for managing user sessions.
 */
const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /**
     * Sign out the active user.
     */
    logout: (state) => {
      state.active = undefined;
      state.loading = Loading.Idle;
    },
  },
  extraReducers: (builder) => {
    // Update state when a sign in request is started.
    builder.addCase(login.pending, (state) => {
      state.active = undefined;
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    // Update state when a sign in request completed successfully.
    builder.addCase(login.fulfilled, (state, action) => {
      state.active = action.payload;
      state.loading = Loading.Idle;
    });
    // Update state when a sign in request completed with an error.
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
    // Update state when a sign up request is started.
    builder.addCase(register.pending, (state) => {
      state.active = undefined;
      state.error = undefined;
      state.loading = Loading.Pending;
    });
    // Update state when a sign up request completed successfully.
    builder.addCase(register.fulfilled, (state, action) => {
      state.active = action.payload;
      state.loading = Loading.Idle;
    });
    // Update state when a sign up request completed with an error.
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = Loading.Idle;
    });
  },
});

export const { logout } = slice.actions;

export const usersReducer = slice.reducer;
