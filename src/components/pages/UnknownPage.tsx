import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UnknownPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Page not found</h2>
          <p>
            The page you requested could not be found. Do you want to go back to
            the <Link to="/">homepage</Link>?
          </p>
        </Col>
      </Row>
    </Container>
  );
};
