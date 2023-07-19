import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

export const Deco = () => {
  return (
    <>
    <CardGroup>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='imgCard cover' variant="top" src="../imagenes/buda.png" />
      <Card.Body>
      <h1 class="bi bi-currency-dollar">2200</h1>
        <span class="badge bg-secondary fs-4 fit-height">#0032</span>
        <a variant="primary" target="_blank" rel='noreferrer'
            class="btn_effect"
            href="https://wa.me/+549115618107?text=Hola,%20quisiera%20más%20info%20de%20el%20producto%20%23221">Comprar</a>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
  )
}

