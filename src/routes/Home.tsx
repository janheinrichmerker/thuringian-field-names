import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { ConnectedProps } from "react-redux";
import { connectApp } from "../store";
import { decrement, increment, selectCounterValue } from "../store/counter";

// Component props.
interface Props {}
// Combine component props with connected Redux props (state and actions).
type CombinedProps = Props & ConnectedProps<typeof connector>;

class Home extends Component<CombinedProps> {
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
            </div>
            <Alert variant="success">Bootstrap works!</Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}

const connector = connectApp(
  (state) => ({
    counter: selectCounterValue(state),
  }),
  (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  })
);

export default connector(Home);
