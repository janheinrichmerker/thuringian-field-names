import { Component } from "react";
import { Container, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { FormattedDisplayName } from "react-intl";
import { v4 as uuid } from "uuid";
import {
  AppDispatch,
  RootState,
  selectSettingsLocale,
  updateLocale,
} from "../../store";
import "./AppFooter.scss";

class ConnectedAppFooter extends Component<ConnectedProps<typeof connector>> {
  private id = uuid();

  renderLocales() {
    const locales = Array.from(
      new Set(["en-US", "de-DE", this.props.locale, navigator.language])
    );
    const links = locales.map((locale) => {
      return (
        <NavDropdown.Item
          key={locale}
          active={this.props.locale === locale}
          onClick={() => this.props.updateLocale(locale)}
        >
          <FormattedDisplayName type="language" value={locale} />
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

export const AppFooter = connector(ConnectedAppFooter);
