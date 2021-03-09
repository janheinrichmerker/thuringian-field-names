import { FunctionComponent } from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  register,
  selectUsersError,
  selectUsersIsActive,
  selectUsersIsLoading,
} from "../../store";
import { SignInForm, SignUpForm } from "..";

export const UserPage: FunctionComponent = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectUsersIsActive);
  const error = useSelector(selectUsersError);
  const loading = useSelector(selectUsersIsLoading);

  function handleLogin(nameOrEmail: string, password: string) {
    dispatch(login({ nameOrEmail, password }));
  }

  function handleRegister(name: string, email: string, password: string) {
    dispatch(register({ name, email, password }));
  }

  if (isLoggedIn) return <Redirect to="/" />;

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
                  <SignInForm
                    handleLogin={handleLogin}
                    error={error}
                    loading={loading}
                  />
                </Route>
                <Route exact path="/signup">
                  <SignUpForm
                    handleRegistration={handleRegister}
                    error={error}
                    loading={loading}
                  />
                </Route>
              </Switch>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
