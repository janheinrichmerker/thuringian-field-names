import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Loading } from "../../model";

// Selectors for easy usage in React using the `useSelector()` hook.
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
