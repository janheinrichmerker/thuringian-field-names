import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";

export class LoadingAlert extends Component {
  render() {
    return (
      <Alert variant="info">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Alert>
    );
  }
}
