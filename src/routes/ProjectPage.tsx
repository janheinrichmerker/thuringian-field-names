import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ProjectPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>
              Want to learn more about the{" "}
              <Link to="/project/archive">archive</Link>,{" "}
              <Link to="/project/data">data</Link>, or{" "}
              <Link to="/project/data">our partners</Link>?
            </p>
          </Col>
        </Row>
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
