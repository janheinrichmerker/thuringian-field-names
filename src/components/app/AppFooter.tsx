import { FunctionComponent } from "react";
import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { v4 as uuid } from "uuid";
import { LocaleNav } from "..";
import "./AppFooter.scss";

/**
 * Main app footer component.
 *
 * Displays a navigation bar at the top of the screen,
 * containing legal information and infrequently used links.
 */
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
