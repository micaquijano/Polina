import React from 'react'
import './assets/styleFooter.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
   <>
   <div id='Contactos'>
   <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conéctate con nosotras en las redes sociales:</span>
        </div>

        <div className='menu-container'>
          <a href='' className='me-4 text-reset'>
          <div class="bi bi-facebook" alt='#'></div>
          </a>
          <a href='' className='me-4 text-reset'>
          <div class="bi bi-google" alt='#'></div>
          </a>
          <a href='' className='me-4 text-reset'>
          <div class="bi bi-instagram" alt='#'></div>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Tia de Barro
              </h6>
              <p>
              Todas nuestras piezas son únicas y hechas a mano. Si no hay stock de la pieza que querés podés encargarla, 
              teniendo en cuenta que los encargos tienen una demora de 15 dias aproximadamente.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Medios de Pago</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Tranferencia Bancaria
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Efectivo
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mercado Pago
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Nuestros Productos</h6>
              <p>
                <a href='/Categoria/TazasPersonalizadas' className='text-reset'>
                  Tazas Personalizadas
                </a>
              </p>
              <p>
                <a href='/Categoria/tazasEnStock' className='text-reset'>
                  Tazas en Stock
                </a>
              </p>
              <p>
                <a href='/Categoria/Deco' className='text-reset'>
                  Deco
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contactos</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />Pontevedra, Merlo, Bs As.</p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />info@example.com</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          
      - Tia de Barro. Todos los derechos

        </a>
      </div>
    </MDBFooter>
    </div>
   </>
  )
}
