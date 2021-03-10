import { FunctionComponent } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SubmitForm } from "..";
import { FieldNameInput } from "../../model";
import {
  selectSubmitError,
  selectSubmitIsLoading,
  selectSubmitSuccess,
  submit,
  useAppDispatch,
} from "../../store";

export const SubmitPage: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const success = useSelector(selectSubmitSuccess);
  const error = useSelector(selectSubmitError);
  const loading = useSelector(selectSubmitIsLoading);

  function handleSubmit(input: FieldNameInput) {
    dispatch(submit(input));
  }

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
      {success ? (
        <Row>
          <Col>
            <Alert variant="success">Thank you for your contribution!</Alert>
          </Col>
        </Row>
      ) : undefined}
      <SubmitForm submit={handleSubmit} loading={loading} error={error} />
    </Container>
  );
};

// TODO Redirect if not logged in.
// Choose location from OpenStreetMap.
