import React from 'react'
import './assets/styleFooter.css'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer id="page_footer">
    <div className="footer-social-link">
      <Container>
        <Row>
          <Col>
            <ul>
              <h3 className='text-contacto'>Contactanos</h3>
              <li>
                <a href="https://www.instagram.com/tiadebarro/">
                  <i className="bi bi-instagram"></i> Tia de Barro
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/">
                  <i className="bi bi-whatsapp"></i> +54 9 11 5618-1807
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/">
                  <i className="bi bi-envelope"></i> info@TiaDeBarro.org
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className='footer-Container'>
        <Row>
          <Col>
            <ul>
              <h3 className='text-contacto'>Medios de Pago</h3>
              <li >
                <img className='Mp' src='./../imagenes/mediosDePagos/mercadoPago.png' alt='#'></img>
                <p>mercado Pago</p>
              </li>
              <li>
              <img className='img-icons' src='./../imagenes/mediosDePagos/efectivo.png' alt='#'></img> 
              <p>Efectivo</p> 
              </li>
              <li>
              <img className='img-icons' src='./../imagenes/mediosDePagos/tranferenciaBancaria.png' alt='#'></img>
              <p>Transferencia Bancaria</p>  
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <h4 className="text-Footer">
      &copy; copyrigth 2022 - Tia de Barro. Todos los derechos
      reservados.
    </h4>
  </footer>
  )
}
