import { FunctionComponent, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchResults,
  selectSearchIsLoading,
  searchFieldNames,
  selectSearchError,
} from "../../store";
import { SearchForm, ApiErrorAlert, SearchSnippets, LoadingAlert } from "..";

interface Parameters {
  query: string;
}

export const SearchPage: FunctionComponent = () => {
  const params = useParams<Parameters>();
  const history = useHistory();

  const dispatch = useDispatch();

  const results = useSelector(selectSearchResults);
  const loading = useSelector(selectSearchIsLoading);
  const error = useSelector(selectSearchError);

  // Search field names whenever the query changes.
  useEffect(() => {
    dispatch(searchFieldNames(params.query));
  }, [dispatch, params.query]);

  function search(query: string) {
    history.push(`/search/${query}`);
  }

  return (
    <Container>
      <Row>
        <Col>
          <SearchForm handleSearch={search} query={params.query} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            {results.length} results for <b>{params.query}</b>.
          </p>
        </Col>
      </Row>
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
    </Container>
  );
};
