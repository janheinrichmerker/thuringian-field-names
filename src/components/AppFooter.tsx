import { Component } from "react";
import { Container, Col, Row, Navbar, Nav } from "react-bootstrap";
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
                <Nav.Link>Imprint</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/privacy" exact>
                <Nav.Link>Privacy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
