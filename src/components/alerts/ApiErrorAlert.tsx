import { FunctionComponent } from "react";
import { Alert } from "react-bootstrap";

/**
 * Component for displaying an API error.
 */
export const ApiErrorAlert: FunctionComponent<{
  error: string;
}> = ({ error }) => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Error when requesting the API</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
};
