import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Diamond from './assets/imagenes/logoTiaDeBarro.jpeg';
import './assets/styleNavBar.css'

export const NavBar = () => {
  return (
    <Navbar className='menu-style' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="./">
        <img alt='#' src={Diamond} />
        </Navbar.Brand>
        <section>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className='buttons' href="#SobreNosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link className='buttons' href="/Contactos">Contactos</Nav.Link>
            <NavDropdown className='buttons' title="Nuestros Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item className='buttons' href="#action/3.1">Tazas Personalizadas</NavDropdown.Item>
              <NavDropdown.Item className='buttons' href="#action/3.2">
              Tazas en Stock
              </NavDropdown.Item>
              <NavDropdown.Item className='buttons' href="#action/3.3">Deco</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </section>
    </Navbar>
    
  );
}
