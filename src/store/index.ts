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
  fetchFeaturedFieldNames,
  searchReducer,
  searchFieldNames,
  emptySearch,
  settingsReducer,
  updateLocale,
  usersReducer,
  login,
  logout,
  register,
  detailsReducer,
  fetchFieldName,
  submitReducer,
  submit,
} from "./slices";
export type {
  FeaturedState,
  SearchState,
  SettingsState,
  UserState,
  DetailsState,
  SubmitState,
} from "./slices";
export type { RootState } from "./rootReducer";
export {
  selectFeatured,
  selectFeaturedSnippets,
  selectFeaturedError,
  selectFeaturedIsLoading,
  selectSearch,
  selectSearchResults,
  selectSearchError,
  selectSearchIsLoading,
  selectSettings,
  selectSettingsLocale,
  selectUsers,
  selectUsersActive,
  selectUsersError,
  selectUsersIsActive,
  selectUsersIsLoading,
  selectDetails,
  selectDetailsFieldName,
  selectDetailsError,
  selectDetailsIsLoading,
  selectSubmit,
  selectSubmitSuccess,
  selectSubmitError,
  selectSubmitIsLoading,
} from "./selectors";
