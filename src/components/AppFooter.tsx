import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./AppFooter.scss";

export default class AppFooter extends Component {
  render() {
    return (
      <Container fluid className="AppFooter">
        <Container>
          <Row>
            <Col>Footer</Col>
          </Row>
          {/* TODO Add footer with project partner logos. */}
          {/* TODO Add footer imprint and privacy policy. */}
        </Container>
      </Container>
    );
  }
}
