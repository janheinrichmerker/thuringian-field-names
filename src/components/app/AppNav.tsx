import { FunctionComponent } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { v4 as uuid } from "uuid";
import { SearchForm, LoginNav } from "..";
import "./AppNav.scss";

export const AppNav: FunctionComponent = () => {
  const id = uuid();
  const history = useHistory();
  const { formatMessage } = useIntl();

  function search(query: string) {
    history.push(`/search/${query}`);
  }

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
        <Navbar.Toggle aria-controls={`${id}-collapse`} />
        <Navbar.Collapse id={`${id}-collapse`}>
          <Nav className="mr-auto">
            <LinkContainer to="/" exact>
              <Nav.Link>
                <FormattedMessage id="app.nav.home" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/project">
              <NavDropdown
                title={formatMessage({ id: "app.nav.project" })}
                id={`${id}-dropdown-project`}
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
                <LinkContainer to="/project/partners" exact>
                  <NavDropdown.Item>
                    <FormattedMessage id="app.nav.project.partners" />
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </LinkContainer>
            <LinkContainer to="/field-names">
              <NavDropdown
                title={formatMessage({ id: "app.nav.fieldNames" })}
                id={`${id}-dropdown-field-names`}
              >
                <LinkContainer to="/field-names" exact>
                  <NavDropdown.Item>
                    <FormattedMessage id="app.nav.fieldNames.overview" />
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/field-names/nature" exact>
                  <NavDropdown.Item>
                    <FormattedMessage id="app.nav.fieldNames.nature" />
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/field-names/culture" exact>
                  <NavDropdown.Item>
                    <FormattedMessage id="app.nav.fieldNames.culture" />
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/field-names/research" exact>
                  <NavDropdown.Item>
                    <FormattedMessage id="app.nav.fieldNames.research" />
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/field-names/submit" exact>
                  <NavDropdown.Item>
                    <FormattedMessage id="app.nav.fieldNames.submit" />
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </LinkContainer>
          </Nav>
          <SearchForm search={search} />
          <LoginNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
