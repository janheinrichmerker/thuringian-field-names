import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class PrivacyPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="warning">
              This is a conceptual development app.
              Later, you would find a privacy policy here.
              Developers are no lawyers ⚖️😉
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}
