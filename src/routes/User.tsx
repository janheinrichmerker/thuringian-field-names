import { Component } from "react";
import { Container, Row, Col, Card, Form, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { Switch, Route, Redirect } from "react-router-dom";
import { login, register, selectUsersIsActive } from "../store/users";

// Component props.
interface Props {}
// Combine component props with connected Redux props (state and actions).
type CombinedProps = Props & ConnectedProps<typeof connector>;

class User extends Component<CombinedProps> {
  renderLogin() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Email or username</Form.Label>
          <Form.Control type="email" placeholder="john.doe@example.com" />
          <Form.Text className="text-muted">
            You can log in using either your email address or your user name.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    );
  }

  renderSignup() {
    return (
      <Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="john.doe@example.com" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form.Group>
    );
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <Card>
              <Card.Header>
                <Nav variant="tabs">
                  <LinkContainer to="/login" exact>
                    <Nav.Link>Sign in</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup" exact>
                    <Nav.Link>Sign up</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Switch>
                  <Route exact path="/login">
                    {this.renderLogin()}
                  </Route>
                  <Route exact path="/signup">
                    {this.renderSignup()}
                  </Route>
                </Switch>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    isLoggedIn: selectUsersIsActive(state),
  }),
  (dispatch: AppDispatch) => ({
    login: (nameOrEmail: string, password: string) => {
      dispatch(
        login({
          nameOrEmail,
          password,
        })
      );
    },
    register: (name: string, email: string, password: string) => {
      dispatch(
        register({
          name,
          email,
          password,
        })
      );
    },
  })
);

export default connector(User);
