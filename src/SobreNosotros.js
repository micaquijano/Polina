import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import Img from './assets/imagenes/SN1.png';
import Img1 from './assets/imagenes/SN2.png';
import './assets/styleSobreNosotros.css'
import Instagram from './assets/imagenes/instagram.jpg'

export const SobreNosotros = () => {
  return (
    <>
    <Container >
<CardGroup className='Card-container'>
      <Card >
        <Card.Body id='SobreNosotros'>
          <Card.Title>DESDE CERO</Card.Title>
          <Card.Text>
          Cada pieza lleva un largo proceso de trabajo que la hace única y exclusiva. Con un diseño actual y diferente, su creación supone varias horas de mimo y dedicación. La artesanía es lo que las hace diferentes, convirtiéndolas en pequeñas y valiosas obras de arte.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Img} />
        </Card>
      <Card>
        <Card.Body>
          <Card.Title>IMPERFECTA PERFECCIÓN</Card.Title>
          <Card.Text>
          Las piezas son fabricadas a mano, sin ayuda de moldes ni torno. Es por ello que cada unidad es única e irrepetible. Cada pequeña irregularidad es lo que las caracteriza y les da ese aire tan fresco y artesano.  
          </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>
    <CardGroup>
    <Card>
        <Card.Body>
          <Card.Title>MEJORES CALIDADES</Card.Title>
          <Card.Text>
          Todas las piezas son elaboradas apoyando al pequeño negocio de proximidad con los productos de la más alta calidad. Buscamos procesos responsables y respetuosos con el medio ambiente.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Card.Img variant="top" src={Img1}></Card.Img>
        </Card>
      <Card>
        <Card.Body>
          <Card.Title>MUCHO LOVE</Card.Title>
          <Card.Text>
          Siempre he intentado difundir el amor propio y la búsqueda del bienestar interior. Es uno de los valores de Inesita's, uno esencial que todos debemos intentar fomentar. No hay nada más satisfactorio que hacer las cosas creyendo y apoyándose a uno mismo, por eso trato de hacer las cosas así, con tanto love.  
          </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>
    </Container>
    <div className='img_container'>
        <a target="blank" href="https://www.instagram.com/hechoxpolina/"  className='img_button btn'>Instagram</a> 
        <img src={Instagram} alt='...' className='imgCover img-insta'/>
      </div>
    
				
</>
  )
}
