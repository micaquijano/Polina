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
    <CardGroup>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='imgCard cover' variant="top" src={productos.img} />
      <Card.Body>
        <h1 class="bi bi-currency-dollar">{productos.price}</h1>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
    })}
    </>
  )
}