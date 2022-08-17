import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import './assets/styleMain.css'

export const SobreNosotros = () => {
  return (
    <>
<CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>DESDE CERO</Card.Title>
          <Card.Text>
          Cada pieza lleva un largo proceso de trabajo que la hace única y exclusiva. Con un diseño actual y diferente, su creación supone varias horas de mimo y dedicación. La artesanía es lo que las hace diferentes, convirtiéndolas en pequeñas y valiosas obras de arte.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/cup-and-saucer-on-a-white-background-picture-id1180657732?k=20&m=1180657732&s=612x612&w=0&h=h3CRtRyXfk0BmI7Wn_AdizLn2LGJaGLvCv2ITeFQ4h4=" />
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
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/cup-and-saucer-on-a-white-background-picture-id1180657732?k=20&m=1180657732&s=612x612&w=0&h=h3CRtRyXfk0BmI7Wn_AdizLn2LGJaGLvCv2ITeFQ4h4=" />
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
</>
  )
}
