import { FunctionComponent } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { v4 as uuid } from "uuid";
import { logout, selectUsersActive, useAppDispatch } from "../store";

const LoginNavActive: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUsersActive);
  const id = uuid();
  if (!user) throw Error("Component must only be loaded if user is active.");
  return (
    <Nav>
      <NavDropdown
        title={`Signed in as ${user.name}`}
        id={`${id}-dropdown-user`}
      >
        <LinkContainer to="/submit" exact>
          <NavDropdown.Item>
            <FormattedMessage id="app.nav.submitFieldName" />
          </NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => dispatch(logout())}>
          <FormattedMessage id="app.nav.signOut" />
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

const LoginNavInactive: FunctionComponent = () => {
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
};

export const LoginNav: FunctionComponent = () => {
  const isActive = useSelector(selectUsersActive);
  return isActive ? <LoginNavActive /> : <LoginNavInactive />;
};
