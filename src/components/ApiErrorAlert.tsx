import { Component } from "react";
import { Alert } from "react-bootstrap";

interface Props {
  error: string;
}
export class ApiErrorAlert extends Component<Props> {
  render() {
    return (
      <Alert variant="warning">
        <Alert.Heading>Error when requesting the API</Alert.Heading>
        <p>{this.props.error}</p>
      </Alert>
    );
  }
}
