import { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps,
} from "react-intl";
import { v4 as uuid } from "uuid";
import { SearchForm, LoginNav } from "..";
import "./AppNav.scss";

class ConnectedAppNav extends Component<
  WrappedComponentProps & RouteComponentProps
> {
  private id = uuid();

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
                  <LinkContainer to="/project/partners" exact>
                    <NavDropdown.Item>
                      <FormattedMessage id="app.nav.project.partners" />
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </LinkContainer>
              <LinkContainer to="/field-names">
                <NavDropdown
                  title={this.props.intl.formatMessage({
                    id: "app.nav.fieldNames",
                  })}
                  id={`${this.id}-dropdown-field-names`}
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
                  <LinkContainer to="/field-names/research" exact>
                    <NavDropdown.Item>
                      <FormattedMessage id="app.nav.fieldNames.research" />
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </LinkContainer>
            </Nav>
            <SearchForm handleSearch={this.search.bind(this)} />
            <LoginNav />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  private search(query: string) {
    this.props.history.push(`/search/${query}`);
  }
}

export const AppNav = withRouter(injectIntl(ConnectedAppNav));
