import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Project extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>Project page. Want to learn more about the <Link to="./archive">archive</Link>?</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
