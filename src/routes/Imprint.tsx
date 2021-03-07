import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class Imprint extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="warning">
              This is a conceptual development app.
              Later, you would find an imprint here.
              Developers are no lawyers ⚖️😉
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}
