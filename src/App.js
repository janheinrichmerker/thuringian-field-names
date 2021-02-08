import "./App.scss";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Thüringische Flurnamen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Projekt" id="basic-nav-dropdown">
                <NavDropdown.Item href="#project">Allgemein</NavDropdown.Item>
                <NavDropdown.Item href="#project/archive">Flurnamenarchiv
                </NavDropdown.Item>
                <NavDropdown.Item href="#project/data">Datengrundlage
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
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
      <Container>
        <Row>
          <Col>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <Alert variant="success">Bootstrap works!</Alert>
          </Col>
        </Row>
      </Container>
      {/* TODO Add footer with project partner logos. */}
      {/* TODO Add footer imprint and privacy policy. */}
    </div>
  );
}

export default App;
