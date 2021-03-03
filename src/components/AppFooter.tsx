import { Component } from "react";
import { Container, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AppFooter.scss";
import { v4 as uuid } from "uuid";
import { connect, ConnectedProps } from "react-redux";
import { selectSettingsLocale, updateLocale } from "../store/settings";
import { AppDispatch, RootState } from "../store";

class _AppFooter extends Component<ConnectedProps<typeof connector>> {
  private id = uuid();
  private locales = {
    "en-US": "English",
    "de-DE": "German",
  };

  renderLocales() {
    const links = Object.entries(this.locales).map(([key, label]) => {
      return (
        <NavDropdown.Item
          key={key}
          active={this.props.locale === key}
          onClick={() => this.props.updateLocale(key)}
        >
          {label}
        </NavDropdown.Item>
      );
    });
    return (
      <NavDropdown
        drop="up"
        title="Language"
        id={`${this.id}-dropdown-language`}
      >
        {links}
      </NavDropdown>
    );
  }

  render() {
    return (
      <Navbar
        fixed="bottom"
        bg="light"
        expand="md"
        variant="light"
        className="AppFooter"
      >
        <Container>
          <Navbar.Toggle aria-controls={`${this.id}-collapse`} />
          <Navbar.Collapse id={`${this.id}-collapse`}>
            <Navbar.Text>© Copyright Information</Navbar.Text>
            <Col />
            <Nav>
              <LinkContainer to="/imprint" exact>
                <Nav.Link>Imprint</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/privacy" exact>
                <Nav.Link>Privacy</Nav.Link>
              </LinkContainer>
              {this.renderLocales()}
              <Nav.Link
                href="https://github.com/heinrichreimer/thuringian-field-names/"
                target="_blank"
              >
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const connector = connect(
  (state: RootState) => ({
    locale: selectSettingsLocale(state),
  }),
  (dispatch: AppDispatch) => ({
    updateLocale: (locale: string) => dispatch(updateLocale(locale)),
  })
);

export const AppFooter = connector(_AppFooter);
