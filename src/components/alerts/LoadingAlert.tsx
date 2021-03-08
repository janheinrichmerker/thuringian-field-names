import { FunctionComponent } from "react";
import { Alert, Spinner } from "react-bootstrap";

export const LoadingAlert: FunctionComponent = () => {
  return (
    <Alert variant="info">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Alert>
  );
};
