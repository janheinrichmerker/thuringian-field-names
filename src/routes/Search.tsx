import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedDate } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { FieldNameType } from "../model";
import { AppDispatch, RootState } from "../store";
import {
  selectSearchResults,
  selectSearchIsLoading,
  searchFieldNames,
  selectSearchError,
} from "../store/search";
import { Search as SearchForm } from "../components/forms/Search";
import { ApiErrorAlert } from "../components/ApiErrorAlert";

interface Parameters {
  query: string;
}

class ConnectedSearch extends Component<
  RouteComponentProps<Parameters> & ConnectedProps<typeof connector>
> {
  componentDidMount() {
    this.props.search(this.props.match.params.query);
  }

  componentDidUpdate(prevProps: Readonly<ConnectedSearch["props"]>) {
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.props.search(this.props.match.params.query);
    }
  }

  renderLoading() {
    return <Fragment>Searching...</Fragment>;
  }

  renderList() {
    return (
      <Fragment>
        Field names ({this.props.results.length}):
        <ol>
          {this.props.results.map((model) => (
            <li key={model.id}>
              <strong>{model.title}</strong>
              <br />
              {model.type === FieldNameType.Map
                ? "Map"
                : model.type === FieldNameType.Marking
                ? "Marking"
                : "Unknown type"}
              <br />
              Created <FormattedDate value={model.creation.date} /> by{" "}
              {model.creation.author}
              <details>
                <summary>JSON</summary>
                <pre>{JSON.stringify(model)}</pre>
              </details>
            </li>
          ))}
        </ol>
      </Fragment>
    );
  }

  render() {
    console.log(this.props.location);
    return (
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
            {this.props.loading ? (
              this.renderLoading()
            ) : this.props.error ? (
              <ApiErrorAlert error={this.props.error} />
            ) : (
              this.renderList()
            )}
          </Col>
        </Row>
      </Container>
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

export const Search = connector(withRouter(ConnectedSearch));
