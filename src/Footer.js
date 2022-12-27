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
              <img className='icons-social' src='./../imagenes/icons/instagram.png' alt='#' ></img>
                <a href="https://www.instagram.com/tiadebarro/">Tia de Barro</a>
              </li>
              <li>
              <img className='icons-social' src='./../imagenes/icons/whatsapp.png' alt='#' ></img>
                <a href="https://www.whatsapp.com/">+54 9 11 5618-1807</a>
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
                <img className='Mp' src='./../imagenes/icons/mercadoPago.png' alt='#'></img>
                <p>mercado Pago</p>
              </li>
              <li>
              <img className='img-icons' src='./../imagenes/icons/efectivo.png' alt='#'></img> 
              <p>Efectivo</p> 
              </li>
              <li>
              <img className='img-icons' src='./../imagenes/icons/tranferenciaBancaria.png' alt='#'></img>
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
