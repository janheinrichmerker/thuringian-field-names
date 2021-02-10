import { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <Alert variant="success">Bootstrap works!</Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}
