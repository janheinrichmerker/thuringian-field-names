import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SubmitForm } from "..";

export const SubmitPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Submit a new field name</h2>
          <p>
            Using this form, you can contribute to the Thuringian Field Names
            Archive. If you know a field name and have verified that the field
            name not yet exists please submit a new name. We will check your
            contribution and publish it if it meets our quality requirements.
          </p>
        </Col>
      </Row>
      <SubmitForm submit={() => {}} loading={false} />
    </Container>
  );
};

// TODO Redirect if not logged in.
// Choose location from OpenStreetMap.
