import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Re-export to simplify importing.
export {
  featuredReducer,
  selectFeatured,
  selectFeaturedSnippets,
  selectFeaturedError,
  selectFeaturedIsLoading,
  fetchFeaturedFieldNames,
  searchReducer,
  selectSearch,
  selectSearchQuery,
  selectSearchResults,
  selectSearchError,
  selectSearchIsLoading,
  searchFieldNames,
  settingsReducer,
  selectSettings,
  selectSettingsLocale,
  updateLocale,
  usersReducer,
  selectUsers,
  selectUsersActive,
  selectUsersError,
  selectUsersIsActive,
  selectUsersIsLoading,
  login,
  logout,
  register,
  detailsReducer,
  selectDetails,
  selectDetailsFieldName,
  selectDetailsError,
  selectDetailsIsLoading,
  fetchFieldName,
  submitReducer,
  selectSubmit,
  selectSubmitSuccess,
  selectSubmitError,
  selectSubmitIsLoading,
  submit,
} from "./slices";
export type { RootState } from "./rootReducer";
export type {
  FeaturedState,
  SearchState,
  SettingsState,
  UserState,
  DetailsState,
  SubmitState,
} from "./slices";
