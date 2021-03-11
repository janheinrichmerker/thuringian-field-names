import { Fragment, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  selectUsersError,
  selectUsersIsActive,
  selectUsersIsLoading,
} from "../store";
import { ApiErrorAlert, LoadingAlert } from ".";

export const UserRestrictedContent: FunctionComponent = ({ children }) => {
  const isLoggedIn = useSelector(selectUsersIsActive);
  const error = useSelector(selectUsersError);
  const loading = useSelector(selectUsersIsLoading);

  if (loading) {
    return <LoadingAlert />;
  } else if (error) {
    return <ApiErrorAlert error={error} />;
  } else if (!isLoggedIn) {
    return <Redirect to="/login" />;
  } else {
    return <Fragment>{children}</Fragment>;
  }
};
