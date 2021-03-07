import { Component, Fragment } from "react";
import { Container, Row, Col, Alert, Jumbotron, Button } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  fetchFeaturedFieldNames,
  selectFeaturedSnippets,
  selectFeaturedIsLoading,
  selectFeaturedError,
} from "../store/featured";
import { ApiErrorAlert } from "../components/ApiErrorAlert";
import { FormattedMessage } from "react-intl";
import { LinkContainer } from "react-router-bootstrap";

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
        <Jumbotron>
          <h1>
            <FormattedMessage id="project.title" />
          </h1>
          <p>
            <FormattedMessage id="project.shortDescription" />
          </p>
          <p>
            <LinkContainer to="/project">
              <Button variant="primary">Learn more</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
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
    fieldNames: selectFeaturedSnippets(state),
    loading: selectFeaturedIsLoading(state),
    error: selectFeaturedError(state),
  }),
  (dispatch: AppDispatch) => ({
    fetchFieldNames: () => dispatch(fetchFeaturedFieldNames()),
  })
);

export const Home = connector(ConnectedHome);
