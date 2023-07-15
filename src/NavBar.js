import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './assets/styleNavBar.css'

export const NavBar = () => {
  return (
    <Navbar className='menu-style' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
        <img alt='#' src="/imagenes/polinaLogo.png" />
        </Navbar.Brand>
        <section className='color-button'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <a href="#SobreNosotros">Sobre Nosotros</a>
            <a href="#Contactos">Contactos</a>
            <NavDropdown title="Nuestros Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item className='btn_effect'  href="/Categoria/TazasPersonalizadas">Tazas Personalizadas</NavDropdown.Item>
              <NavDropdown.Item className='btn_effect'href="/Categoria/tazasEnStock">
              Tazas en Stock
              </NavDropdown.Item>
              <NavDropdown.Item className='btn_effect' href="/Categoria/Deco">Deco</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </section>
    </Navbar>
    
  );
}
