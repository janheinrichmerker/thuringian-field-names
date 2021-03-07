import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export class ProjectPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Das Projekt</h2>
            <p>
              <FormattedMessage id="project.longDescription" />
            </p>
            <p>
              <FormattedMessage id="project.status" />
            </p>
            <p>
              Want to learn more about the{" "}
              <Link to="/project/archive">archive</Link>,{" "}
              <Link to="/project/data">data</Link>, or{" "}
              <Link to="/project/data">our partners</Link>?
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
