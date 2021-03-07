
import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class Details extends Component {
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

// TODO Parse ID from path.
// TODO Display detailed information about field name.
// TODO OpenStreetMap overlay.