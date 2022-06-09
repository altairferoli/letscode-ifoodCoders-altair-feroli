import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";

export const DefaultTemplate = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <main>{props.children}</main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};
