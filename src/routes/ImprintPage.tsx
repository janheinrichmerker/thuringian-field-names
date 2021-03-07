import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class ImprintPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="warning">
              This is a conceptual development app.
              Later, you would find an imprint here.
              The developers is not a lawyer ⚖️😉
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}
