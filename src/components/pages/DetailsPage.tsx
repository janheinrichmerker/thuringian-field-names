import { Fragment, FunctionComponent, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  fetchFieldName,
  selectDetailsError,
  selectDetailsFieldName,
  selectDetailsIsLoading,
  useAppDispatch,
} from "../../store";
import {
  ApiErrorAlert,
  LoadingAlert,
  FieldNameDetailsTable,
  AreaMap,
} from "..";

interface Parameters {
  id: string;
}

/**
 * Page component describing the details of a single field name.
 *
 * Mounted at `/details/:id` where `:id` is the field name's unique ID.
 */
export const DetailsPage: FunctionComponent = () => {
  const params = useParams<Parameters>();

  const dispatch = useAppDispatch();

  const fieldName = useSelector(selectDetailsFieldName);
  const loading = useSelector(selectDetailsIsLoading);
  const error = useSelector(selectDetailsError);

  // Fetch field name details whenever the ID parameter changes.
  useEffect(() => {
    dispatch(fetchFieldName(params.id));
  }, [dispatch, params.id]);

  return (
    <Container>
      <Row>
        <Col>
          {loading ? (
            <LoadingAlert />
          ) : error ? (
            <ApiErrorAlert error={error} />
          ) : fieldName ? (
            <Fragment>
              <h2>{fieldName.title}</h2>
              <FieldNameDetailsTable fieldName={fieldName} />
              {fieldName.area ? (
                <AreaMap area={fieldName.area} label={fieldName.title} />
              ) : undefined}
            </Fragment>
          ) : (
            <ApiErrorAlert error="TODO" />
          )}
        </Col>
      </Row>
    </Container>
  );
};
