import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'

export const Deco = () => {
  return (
    <>
    <CardGroup>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='imgCard cover' variant="top" src="../imagenes/buda.png" />
      <Card.Body>
        <h1 class="bi bi-currency-dollar">1200</h1>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
  )
}

