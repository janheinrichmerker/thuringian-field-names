import { FunctionComponent } from "react";
import { Container, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { FormattedDisplayName } from "react-intl";
import { v4 as uuid } from "uuid";
import {
  selectSettingsLocale,
  updateLocale,
  useAppDispatch,
} from "../../store";
import "./AppFooter.scss";

const LocaleLink: FunctionComponent<{ locale: string }> = ({ locale }) => {
  const dispatch = useAppDispatch();
  const currentLocale = useSelector(selectSettingsLocale);

  return (
    <NavDropdown.Item
      key={locale}
      active={currentLocale === locale}
      onClick={() => dispatch(updateLocale(locale))}
    >
      <FormattedDisplayName type="language" value={locale} />
    </NavDropdown.Item>
  );
};

const LocaleNav: FunctionComponent = () => {
  const id = uuid();
  const currentLocale = useSelector(selectSettingsLocale);
  const locales = Array.from(
    new Set(["en-US", "de-DE", currentLocale, navigator.language])
  );

  return (
    <NavDropdown drop="up" title="Language" id={`${id}-dropdown-language`}>
      {locales.map((locale) => (
        <LocaleLink locale={locale} />
      ))}
    </NavDropdown>
  );
};

export const AppFooter: FunctionComponent = () => {
  const id = uuid();

  return (
    <Navbar
      fixed="bottom"
      bg="light"
      expand="md"
      variant="light"
      className="AppFooter"
    >
      <Container>
        <Navbar.Toggle aria-controls={`${id}-collapse`} />
        <Navbar.Collapse id={`${id}-collapse`}>
          <Navbar.Text>© Copyright Information</Navbar.Text>
          <Col />
          <Nav>
            <LinkContainer to="/imprint" exact>
              <Nav.Link>Imprint</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/privacy" exact>
              <Nav.Link>Privacy</Nav.Link>
            </LinkContainer>
            <LocaleNav />
            <Nav.Link
              href="https://github.com/heinrichreimer/thuringian-field-names/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
