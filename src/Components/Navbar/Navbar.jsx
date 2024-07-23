import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function Navbars() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <Navbar bg="black" data-bs-theme="black" style={{ height: '80px', position: 'sticky', top: 0, zIndex: 1000 }}>
        <Container>
          <img src='img/menu.png' alt='' className='menu-icon' onClick={toggleMenu} />
          <Nav className="me-auto" style={{ marginBottom: '120px' }}>
            <Nav.Link style={{ color: 'rgb(241, 226, 226)' }} href="#home">Home</Nav.Link>
            <Nav.Link style={{ color: 'rgb(241, 226, 226)' }} href="#exp">Experiencias</Nav.Link>
            <Nav.Link style={{ color: 'rgb(241, 226, 226)' }} href="#contact">Contacto</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" style={{ marginBottom: '120px', marginLeft: 'auto' }}>
            <img src='/img/logo.jpg' alt='' className='logoimg' />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className={`mobile-menu ${mobileMenu ? 'open' : ''}`}>
        <img src='/img/close.png' alt='' className='close-icon' onClick={toggleMenu} />
        <Nav className="flex-column">
          <Nav.Link style={{ color: 'rgb(241, 226, 226)' }} href="#home" onClick={toggleMenu}>Home</Nav.Link>
          <Nav.Link style={{ color: 'rgb(241, 226, 226)' }} href="#exp" onClick={toggleMenu}>Experiencias</Nav.Link>
          <Nav.Link style={{ color: 'rgb(241, 226, 226)' }} href="#contact" onClick={toggleMenu}>Contacto</Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default Navbars;
