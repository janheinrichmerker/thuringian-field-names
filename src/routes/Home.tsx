import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { increment, decrement, selectCounterValue } from "../store/counter";

type HomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class Home extends Component<HomeProps> {
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

function mapStateToProps(state: RootState) {
  return {
    counter: selectCounterValue(state),
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
