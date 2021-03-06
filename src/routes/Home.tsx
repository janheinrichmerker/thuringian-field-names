import { Component, Fragment } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  fetchFieldNames,
  selectFieldNamesList,
  selectFieldNamesIsLoading,
  selectFieldNamesError,
} from "../store/fieldNames";
import { ApiErrorAlert } from "../components/ApiErrorAlert";

class ConnectedHome extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.fetchFieldNames();
  }

  renderLoading() {
    return <Alert variant="info">Loading...</Alert>;
  }

  renderList() {
    return (
      <div>
        <p>
          Field names ({this.props.fieldNames.length}):
          <br />
          {this.props.fieldNames.map((model) => (
            <Fragment key={model.id}>
              ID: {model.id}
              &emsp; Title: {model.title}
              &emsp; GND: {model.gndNumber}
              <br />
            </Fragment>
          ))}
        </p>
      </div>
    );
  }

  render() {
    return (
      <Container>
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
}

const connector = connect(
  (state: RootState) => ({
    fieldNames: selectFieldNamesList(state),
    loading: selectFieldNamesIsLoading(state),
    error: selectFieldNamesError(state),
  }),
  (dispatch: AppDispatch) => ({
    fetchFieldNames: () => dispatch(fetchFieldNames()),
  })
);

export const Home = connector(ConnectedHome);
