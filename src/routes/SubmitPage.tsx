import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class SubmitPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="danger">
              {/* TODO Implement component */}
              Component not yet developed.
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}

// TODO Redirect if not logged in.
// Choose location from OpenStreetMap.
