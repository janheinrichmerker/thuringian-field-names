import { Component } from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AppFooter.scss";

export default class AppFooter extends Component {
  render() {
    return (
      <Container fluid className="AppFooter">
        <Navbar fixed="bottom">
          <Container>
            <Navbar.Text>© Copyright Information</Navbar.Text>
            <Nav>
              <LinkContainer to="/imprint" exact>
                <NavLink>Imprint</NavLink>
              </LinkContainer>
              <LinkContainer to="/privacy" exact>
                <NavLink>Privacy</NavLink>
              </LinkContainer>
              <NavLink href="https://github.com/heinrichreimer/thuringian-field-names/" target="_blank">
                GitHub
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
