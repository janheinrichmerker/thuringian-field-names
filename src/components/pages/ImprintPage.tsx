import { FunctionComponent } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

/**
 * Page component describing the imprint.
 *
 * Mounted at `/imprint`.
 * Currently the imprint is just a placeholder.
 */
export const ImprintPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Text copyright:{" "}
            <a
              href="https://projekte.thulb.uni-jena.de/flurnamen/kontakt/impressum.html"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="project.title.full" />
            </a>
          </p>
          <Alert variant="warning">
            This is a conceptual development app. Later, you would find an
            imprint here. The developer is not a lawyer ⚖️😉
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};
