import React from 'react'
import { Button, Card } from 'react-bootstrap';
import productosList from './productosList.js'
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
      <Card key={productos.id}>
      <Card.Img variant="top" src={productos.img} />
      <Card.Body>
        <Card.Title>{productos.name}</Card.Title>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </>
    })}
    </>
  )
}