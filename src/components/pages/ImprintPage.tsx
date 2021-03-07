import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

export class ImprintPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>
              Text copyright:{" "}
              <a href="https://projekte.thulb.uni-jena.de/flurnamen/kontakt/impressum.html">
                <FormattedMessage id="project.title.full" />
              </a>
            </p>
            <Alert variant="warning">
              This is a conceptual development app. Later, you would find an
              imprint here. The developers is not a lawyer ⚖️😉
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}
