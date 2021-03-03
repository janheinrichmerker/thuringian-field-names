import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedDate } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { FieldNameType } from "../model";
import { AppDispatch, RootState } from "../store";
import {
  selectFieldNamesList,
  selectFieldNamesIsLoading,
  searchFieldNames,
} from "../store/fieldNames";

interface Parameters {
  query: string;
}

class ConnectedSearch extends Component<
  RouteComponentProps<Parameters> & ConnectedProps<typeof connector>
> {
  componentDidMount() {
    this.props.search(this.props.match.params.query);
  }

  renderLoading() {
    return <Fragment>Searching...</Fragment>;
  }

  renderList() {
    return (
      <Fragment>
        Field names ({this.props.fieldNames.length}):
        <ol>
          {this.props.fieldNames.map((model) => (
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
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <p>
                {!this.props.loading ? this.renderList() : this.renderLoading()}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    fieldNames: selectFieldNamesList(state),
    loading: selectFieldNamesIsLoading(state),
  }),
  (dispatch: AppDispatch) => ({
    search: (query: string) => dispatch(searchFieldNames({ query })),
  })
);

export const Search = connector(withRouter(ConnectedSearch));
