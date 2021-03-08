import { Component } from "react";
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

interface Parameters {
  id: string;
}
class ConnectedDetailsPage extends Component<
  RouteComponentProps<Parameters> & ConnectedProps<typeof connector>
> {
  componentDidMount() {
    this.props.fetchFieldName(this.props.match.params.id);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="danger">
              {/* TODO Implement component */}
              Component for {JSON.stringify(this.props.fieldName)} not yet
              developed.
            </Alert>
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
