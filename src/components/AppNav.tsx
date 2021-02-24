import { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AppNav.scss";

export default class AppNav extends Component {
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
            <Navbar.Brand>Thüringische Flurnamen</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/" exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/project">
                <NavDropdown title="Projekt" id="basic-nav-dropdown">
                  <LinkContainer to="/project" exact>
                    <NavDropdown.Item>Allgemein</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/project/archive" exact>
                    <NavDropdown.Item>Flurnamenarchiv</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/project/data" exact>
                    <NavDropdown.Item>Datengrundlage</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/project/partner-projects" exact>
                    <NavDropdown.Item>Partnerprojekte</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </LinkContainer>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Suche"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Suchen</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
