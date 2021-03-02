import { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AppNav.scss";
import { v4 as uuid } from "uuid";
import { connect, ConnectedProps } from "react-redux";
import { logout, selectUsersActive } from "../store/users";
import { AppDispatch, RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Component props.
interface Props {}
// Combine component props with connected Redux props (state and actions).
type CombinedProps = Props & ConnectedProps<typeof connector>;

class AppNav extends Component<CombinedProps> {
  private id = uuid();

  renderLogin() {
    const user = this.props.user;
    if (user) {
      return (
        <Nav>
          <NavDropdown title={user.name} id={`${this.id}-dropdown-user`}>
            <LinkContainer to="/submit" exact>
              <NavDropdown.Item>Submit field name</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.props.logout}>
              Sign out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <LinkContainer to="/login" exact>
            <Nav.Link>Sign in</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup" exact>
            <Nav.Link>Sign up</Nav.Link>
          </LinkContainer>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Navbar
        sticky="top"
        bg="primary"
        variant="dark"
        expand="lg"
        className="AppNav"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Thüringische Flurnamen</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <LinkContainer to="/" exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/project">
                <NavDropdown title="Projekt" id={`${this.id}-dropdown-project`}>
                  <LinkContainer to="/project" exact>
                    <NavDropdown.Item>Allgemein</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/project/archive" exact>
                    <NavDropdown.Item>Flurnamenarchiv</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/project/data" exact>
                    <NavDropdown.Item>Datengrundlage</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/project/partner-projects" exact>
                    <NavDropdown.Item>Partnerprojekte</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </LinkContainer>
            </Nav>
            <Form inline>
              <InputGroup className="mr-sm-2">
                <FormControl type="text" placeholder="Search..." />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            {this.renderLogin()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    user: selectUsersActive(state),
  }),
  (dispatch: AppDispatch) => ({
    logout: () => dispatch(logout()),
  }),
);

export default connector(AppNav);
