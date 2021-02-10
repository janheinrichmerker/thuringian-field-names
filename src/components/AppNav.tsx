import React, { Component } from "react";
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

export class AppNav extends Component {
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
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Projekt" id="basic-nav-dropdown">
                <LinkContainer to="/project">
                  <NavDropdown.Item>Allgemein</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/project/archive">
                  <NavDropdown.Item>Flurnamenarchiv</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/project/data">
                  <NavDropdown.Item>Datengrundlage</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/project/partner-projects">
                  <NavDropdown.Item>Partnerprojekte</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
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
