import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class Project extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>Project page.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export class Archive extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="warning">Nothing here yet.</Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}
