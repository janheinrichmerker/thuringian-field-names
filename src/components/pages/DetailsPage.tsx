import { Component, Fragment } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import {
  AppDispatch,
  fetchFieldName,
  RootState,
  selectDetailsError,
  selectDetailsFieldName,
  selectDetailsIsLoading,
} from "../../store";
import { ApiErrorAlert, LoadingAlert } from "..";

interface Parameters {
  id: string;
}

class ConnectedDetailsPage extends Component<
  RouteComponentProps<Parameters> & ConnectedProps<typeof connector>
> {
  private update() {
    this.props.fetchFieldName(this.props.match.params.id);
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps: Readonly<this["props"]>) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.update();
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.props.loading ? (
              <LoadingAlert />
            ) : this.props.error ? (
              <ApiErrorAlert error={this.props.error} />
            ) : (
              <Fragment>
                <Alert variant="danger">
                  {/* TODO Implement component */}
                  Component for {JSON.stringify(this.props.fieldName)} not yet
                  developed.
                </Alert>
              </Fragment>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    fieldName: selectDetailsFieldName(state),
    loading: selectDetailsIsLoading(state),
    error: selectDetailsError(state),
  }),
  (dispatch: AppDispatch) => ({
    fetchFieldName: (id: string) => dispatch(fetchFieldName(id)),
  })
);

export const DetailsPage = connector(withRouter(ConnectedDetailsPage));

// TODO Display detailed information about field name.
// TODO OpenStreetMap overlay.
