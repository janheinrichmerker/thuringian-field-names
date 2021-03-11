import { FunctionComponent, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectSearchResults,
  selectSearchIsLoading,
  searchFieldNames,
  selectSearchError,
  useAppDispatch,
  emptySearch,
} from "../../store";
import { SearchForm, ApiErrorAlert, SearchSnippets, LoadingAlert } from "..";

interface Parameters {
  query: string;
}

export const SearchPage: FunctionComponent = () => {
  const params = useParams<Parameters>();
  const history = useHistory();

  const dispatch = useAppDispatch();

  const results = useSelector(selectSearchResults);
  const loading = useSelector(selectSearchIsLoading);
  const error = useSelector(selectSearchError);

  // Search field names whenever the query changes.
  useEffect(() => {
    if (params.query) {
      dispatch(searchFieldNames(params.query));
    } else {
      dispatch(emptySearch());
    }
  }, [dispatch, params.query]);

  function search(query: string) {
    history.push(`/search/${query}`);
  }

  return (
    <Container>
      <Row>
        <Col>
          <SearchForm search={search} query={params.query} />
        </Col>
      </Row>
      {results.length > 0 ? (
        <Row style={{ marginTop: "1ex" }}>
          <Col>
            <p>
              Found {results.length} results for <b>{params.query}</b>.
            </p>
          </Col>
        </Row>
      ) : undefined}
      <hr />
      {results.length > 0 ? (
        <Row>
          <Col>
            {loading ? (
              <Row>
                <Col>
                  <LoadingAlert />
                </Col>
              </Row>
            ) : error ? (
              <Row>
                <Col>
                  <ApiErrorAlert error={error} />
                </Col>
              </Row>
            ) : (
              <SearchSnippets snippets={results} />
            )}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Alert variant="info">Type in your search query above.</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};
