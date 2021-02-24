import { Component, Fragment } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { Loading } from "../model";
import { AppDispatch, RootState } from "../store";
import { decrement, increment, selectCounterValue } from "../store/counter";
import {
  fetchFieldNames,
  selectFieldNamesList,
  selectFieldNamesLoading,
} from "../store/fieldNames";

// Component props.
interface Props {}
// Combine component props with connected Redux props (state and actions).
type CombinedProps = Props & ConnectedProps<typeof connector>;

class Home extends Component<CombinedProps> {
  componentDidMount() {
    this.props.fetchFieldNames();
  }

  renderLoading() {
    return <Fragment>Loading...</Fragment>;
  }

  renderList() {
    return (
      <Fragment>
        Field names ({this.props.fieldNames.length}):
        <br />
        {this.props.fieldNames
          .map((e) => e.id)
          .map((id) => (
            <Fragment>
              ID: {id}
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
                Clicked: {this.props.counter} times
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
              </p>
              <p>
                {this.props.loading === Loading.Idle
                  ? this.renderList()
                  : this.renderLoading()}
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
    counter: selectCounterValue(state),
    fieldNames: selectFieldNamesList(state),
    loading: selectFieldNamesLoading(state),
  }),
  (dispatch: AppDispatch) => ({
    fetchFieldNames: () => dispatch(fetchFieldNames()),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  })
);

export default connector(Home);
