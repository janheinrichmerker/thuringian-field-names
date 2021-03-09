import { FunctionComponent, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFeaturedFieldNames,
  selectFeaturedSnippets,
  selectFeaturedIsLoading,
  selectFeaturedError,
} from "../../store";
import {
  ApiErrorAlert,
  LoadingAlert,
  ProjectBanner,
  FeaturedFieldNames,
} from "..";

export const HomePage: FunctionComponent = () => {
  const dispatch = useDispatch();

  const fieldNames = useSelector(selectFeaturedSnippets);
  const loading = useSelector(selectFeaturedIsLoading);
  const error = useSelector(selectFeaturedError);

  // Fetch featured field names.
  useEffect(() => {
    dispatch(fetchFeaturedFieldNames());
  }, [dispatch]);

  return (
    <Container>
      <ProjectBanner />
      <Row>
        <Col>
          <h2>Featured field names</h2>
          {loading ? (
            <LoadingAlert />
          ) : error ? (
            <ApiErrorAlert error={error} />
          ) : (
            <FeaturedFieldNames snippets={fieldNames} />
          )}
        </Col>
      </Row>
    </Container>
  );
};
