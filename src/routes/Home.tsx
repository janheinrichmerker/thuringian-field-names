import { Component, Fragment } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  fetchFieldNames,
  selectFieldNamesList,
  selectFieldNamesIsLoading,
} from "../store/fieldNames";

// Component props.
interface Props {}
// Combine component props with connected Redux props (state and actions).
type CombinedProps = Props & ConnectedProps<typeof connector>;

class _Home extends Component<CombinedProps> {
  componentDidMount() {
    // Only fetch field names if needed.
    if (this.props.fieldNames.length === 0) {
      this.props.fetchFieldNames();
    }
  }

  renderLoading() {
    return <Fragment>Loading...</Fragment>;
  }

  renderList() {
    return (
      <Fragment>
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
            <Alert variant="success">Bootstrap works!</Alert>
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
    fetchFieldNames: () => dispatch(fetchFieldNames()),
  })
);

export const Home = connector(_Home);
