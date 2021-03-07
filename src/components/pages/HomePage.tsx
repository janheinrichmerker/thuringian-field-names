import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  fetchFeaturedFieldNames,
  selectFeaturedSnippets,
  selectFeaturedIsLoading,
  selectFeaturedError,
} from "../../store/featured";
import {
  ApiErrorAlert,
  LoadingAlert,
  ProjectBanner,
  FeaturedFieldNames,
} from "..";

class ConnectedHomePage extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.fetchFieldNames();
  }

  render() {
    return (
      <Container>
        <ProjectBanner />
        <Row>
          <Col>
            <h2>Featured field names</h2>
            {this.props.loading ? (
              <LoadingAlert />
            ) : this.props.error ? (
              <ApiErrorAlert error={this.props.error} />
            ) : (
              <FeaturedFieldNames snippets={this.props.fieldNames} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    fieldNames: selectFeaturedSnippets(state),
    loading: selectFeaturedIsLoading(state),
    error: selectFeaturedError(state),
  }),
  (dispatch: AppDispatch) => ({
    fetchFieldNames: () => dispatch(fetchFeaturedFieldNames()),
  })
);

export const HomePage = connector(ConnectedHomePage);
