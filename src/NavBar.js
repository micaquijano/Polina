import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Diamond from './assets/imagenes/logoTiaDeBarro.jpeg';
import { Home } from './Home';
import './assets/styleNavBar.css'

export const NavBar = () => {
  return (
    <Navbar className='menu-style' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/Home">
        <img alt='#' src={Diamond} />
        </Navbar.Brand>
        <section className=' color-button'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Button className='button' href="#SobreNosotros">Sobre Nosotros</Button>
            <Button className='button' href="#Contactos">Contactos</Button>
            <NavDropdown title="Nuestros Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item  href="/Categoria/TazasPersonalizadas">Tazas Personalizadas</NavDropdown.Item>
              <NavDropdown.Item href="/Categoria/tazasEnStock">
              Tazas en Stock
              </NavDropdown.Item>
              <NavDropdown.Item href="/Categoria/Deco">Deco</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </section>
    </Navbar>
    
  );
}
