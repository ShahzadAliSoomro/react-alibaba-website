import React from "react";
import './AliBaba.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nvbar(){
    return(
        <div className="nvbar">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Agriculture</Nav.Link>
            <Nav.Link href="#features">Food & Beverage</Nav.Link>
            <Nav.Link href="#pricing">Apparel</Nav.Link>
            <Nav.Link href="#pricing">Fabric & Textile Raw Material</Nav.Link>
            <Nav.Link href="#pricing">Electrical Equipment & Supplies</Nav.Link>
            <Nav.Link href="#pricing">Home Appliances</Nav.Link>
            <Nav.Link href="#pricing">Chemicals</Nav.Link>
          
          
          </Nav>
         
        </Container>
      </Navbar>
    </div>
    );
};
 export default Nvbar;