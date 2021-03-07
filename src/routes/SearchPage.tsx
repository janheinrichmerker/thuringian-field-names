import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import {
  selectSearchResults,
  selectSearchIsLoading,
  searchFieldNames,
  selectSearchError,
} from "../store/search";
import { SearchForm } from "../components/forms/SearchForm";
import { ApiErrorAlert } from "../components/alerts/ApiErrorAlert";
import { SearchSnippets } from "../components/SearchSnippets";
import { LoadingAlert } from "../components/alerts/LoadingAlert";

interface Parameters {
  query: string;
}

class ConnectedSearchPage extends Component<
  RouteComponentProps<Parameters> & ConnectedProps<typeof connector>
> {
  componentDidMount() {
    this.props.search(this.props.match.params.query);
  }

  componentDidUpdate(prevProps: Readonly<ConnectedSearchPage["props"]>) {
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.props.search(this.props.match.params.query);
    }
  }

  render() {
    console.log(this.props.location);
    return (
      <Fragment>
        <Container key={this.props.location.pathname}>
          <Row>
            <Col>
              <SearchForm
                handleSearch={this.search.bind(this)}
                query={this.props.match.params.query}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                {this.props.results.length} results for{" "}
                <b>{this.props.match.params.query}</b>.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.props.loading ? (
                <Row>
                  <Col>
                    <LoadingAlert />
                  </Col>
                </Row>
              ) : this.props.error ? (
                <Row>
                  <Col>
                    <ApiErrorAlert error={this.props.error} />
                  </Col>
                </Row>
              ) : (
                <SearchSnippets snippets={this.props.results} />
              )}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }

  search(query: string) {
    this.props.history.push(`/search/${query}`);
  }
}

const connector = connect(
  (state: RootState) => ({
    results: selectSearchResults(state),
    loading: selectSearchIsLoading(state),
    error: selectSearchError(state),
  }),
  (dispatch: AppDispatch) => ({
    search: (query: string) => dispatch(searchFieldNames(query)),
  })
);

export const SearchPage = connector(withRouter(ConnectedSearchPage));
