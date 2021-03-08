import { FunctionComponent } from "react";
import { Alert } from "react-bootstrap";

interface Props {
  error: string;
}

export const ApiErrorAlert: FunctionComponent<Props> = ({ error }) => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Error when requesting the API</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
};
