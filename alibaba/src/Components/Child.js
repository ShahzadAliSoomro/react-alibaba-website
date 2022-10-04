import React from "react";
import './AliBaba.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <div className="childnav">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ready to ship</Nav.Link>
            <Nav.Link href="#features">Personal Protective E...</Nav.Link>
            <Nav.Link href="#pricing">Trade shows</Nav.Link>
            <Nav.Link href="#pricing">Buyer Central</Nav.Link>
            <Nav.Link href="#pricing">Sell on AliBaba.com</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
            <br />
            <div className="gap">
          <Nav.Link href="#">Get the app</Nav.Link>
          <Nav.Link href="#">English USD</Nav.Link>
          <Nav.Link href="#">Ship to</Nav.Link>
          </div>
          
          
          </Nav>
         
        </Container>
      </Navbar>
    </div>
  );
}

export default ColorSchemesExample;