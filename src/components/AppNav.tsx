import { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AppNav.scss";
import { v4 as uuid } from "uuid";
import { connect, ConnectedProps } from "react-redux";
import { logout, selectUsersActive } from "../store/users";
import { AppDispatch, RootState } from "../store";
import { Search } from "./forms/Search";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps,
} from "react-intl";

class ConnectedAppNav extends Component<
  WrappedComponentProps & RouteComponentProps & ConnectedProps<typeof connector>
> {
  private id = uuid();

  renderLogin() {
    const user = this.props.user;
    if (user) {
      return (
        <Nav>
          <NavDropdown title={user.name} id={`${this.id}-dropdown-user`}>
            <LinkContainer to="/submit" exact>
              <NavDropdown.Item>
                <FormattedMessage id="app.nav.submitFieldName" />
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.props.logout}>
              <FormattedMessage id="app.nav.signOut" />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <LinkContainer to="/login" exact>
            <Nav.Link>
              <FormattedMessage id="app.nav.signIn" />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup" exact>
            <Nav.Link>
              <FormattedMessage id="app.nav.signUp" />
            </Nav.Link>
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
            <Navbar.Brand>
              <FormattedMessage id="app.title" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls={`${this.id}-collapse`} />
          <Navbar.Collapse id={`${this.id}-collapse`}>
            <Nav className="mr-auto">
              <LinkContainer to="/" exact>
                <Nav.Link>
                  <FormattedMessage id="app.nav.home" />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/project">
                <NavDropdown
                  title={this.props.intl.formatMessage({
                    id: "app.nav.project",
                  })}
                  id={`${this.id}-dropdown-project`}
                >
                  <LinkContainer to="/project" exact>
                    <NavDropdown.Item>
                      <FormattedMessage id="app.nav.project.overview" />
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/project/archive" exact>
                    <NavDropdown.Item>
                      <FormattedMessage id="app.nav.project.archive" />
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/project/data" exact>
                    <NavDropdown.Item>
                      <FormattedMessage id="app.nav.project.data" />
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/project/partner-projects" exact>
                    <NavDropdown.Item>
                      <FormattedMessage id="app.nav.project.partnerProjects" />
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </LinkContainer>
            </Nav>
            <Search handleSearch={this.search.bind(this)} />
            {this.renderLogin()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  search(query: string) {
    this.props.history.push(`/search/${query}`);
  }
}

const connector = connect(
  (state: RootState) => ({
    user: selectUsersActive(state),
  }),
  (dispatch: AppDispatch) => ({
    logout: () => dispatch(logout()),
  })
);

export const AppNav = connector(withRouter(injectIntl(ConnectedAppNav)));
