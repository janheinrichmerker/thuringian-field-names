import { FunctionComponent } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

/**
 * Page component describing the privacy policy.
 *
 * Mounted at `/privacy`.
 * Currently the priivacy policy is just a placeholder.
 */
export const PrivacyPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="warning">
            This is a conceptual development app. Later, you would find a
            privacy policy here. The developer is not a lawyer ⚖️😉
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};
