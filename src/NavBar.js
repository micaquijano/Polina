import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Diamond from './assets/imagenes/logoTiaDeBarro.jpeg';
import { Home } from './Home';
import './assets/styleNavBar.css'

export const NavBar = () => {
  return (
    <Navbar className='menu-style' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/Home">
        <img alt='#' src={Diamond} />
        </Navbar.Brand>
        <section>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className='buttons' href="#SobreNosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link className='buttons' href="#Contactos">Contactos</Nav.Link>
            <NavDropdown className='buttons' title="Nuestros Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item className='buttons' href="/Categoria/TazasPersonalizadas">Tazas Personalizadas</NavDropdown.Item>
              <NavDropdown.Item className='buttons' href="/Categoria/tazasEnStock">
              Tazas en Stock
              </NavDropdown.Item>
              <NavDropdown.Item className='buttons' href="/Categoria/Deco">Deco</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </section>
    </Navbar>
    
  );
}
