import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
  <Navbar bg='primary' variant="dark">
    <Container>
    <Navbar.Brand href="/">LinkedInto</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/search">Search</Nav.Link>
      <Nav.Link href="/profile">Create Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    );
};

export default Navigation;
