import { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { FormattedMessage } from "react-intl";
import { v4 as uuid } from "uuid";
import { AppDispatch, RootState, logout, selectUsersActive } from "../store";
import { User } from "../model";

class ConnectedLoginNav extends Component<ConnectedProps<typeof connector>> {
  private id = uuid();

  private renderSignedIn(user: User) {
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
  }

  private renderSignedOut() {
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

  render() {
    const user = this.props.user;
    if (user) {
      return this.renderSignedIn(user);
    } else {
      return this.renderSignedOut();
    }
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

export const LoginNav = connector(ConnectedLoginNav);
