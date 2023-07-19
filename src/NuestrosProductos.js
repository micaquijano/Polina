import React from 'react'
import { Button, Card, CardGroup, } from 'react-bootstrap';
import productosList from './productosList.js'
import './assets/styleSobreNosotros.css'
import { useState, useEffect } from 'react';


export const NuestrosProductos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  setItems(productosList);
  console.log(productosList, items);
  }, [items]);
  // el useEffect es un hook que se encarga de guardar las variables de ese componente cuando arranca, 
  // ahi se inicializan variables
  // useEffect(() => {
    //   setItems(productosList) 
    //   }, [items]);

    // (productos) => {return <> todo el choclaso que tenes</>}

    return ( 
    <>
    {items.map((productos) =>{return <>

    <CardGroup className='grid-container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='imgCard cover' variant="top" src={productos.img} />
      <Card.Body>
        <h1 class="bi bi-currency-dollar">{productos.price}</h1>
        <span class="badge bg-secondary fs-4 fit-height">#0221</span>
        <a variant="primary" target="_blank"
            class="btn_effect"
            href="https://wa.me/+549115618107?text=Hola,%20quisiera%20más%20info%20de%20el%20producto%20%23221">Comprar</a>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
    })}
    </>
  )
}