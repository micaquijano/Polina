import { useState } from "react";
import { Card } from "react-bootstrap";
const Productos = (props) => {
  const [items, setItems] = useState([]);
  const [initCallApi, setInitCallApi] = useState(false);
  if (!initCallApi) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
        setInitCallApi(true);
      });
  }

  return (
    <>
       <h1>{props.title}</h1>
      {/* hago h3 de solo el nombre */}
      {items.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
      {/* ya me armo un html mas copado con mas propiedades de las que me devuelven */}
      {items.map((item) => (
        <Card key={item.id}>
          <Card.Img variant="top" src={item.image}></Card.Img>
          <Card.Title>{item.name}</Card.Title>
        </Card>
      ))}
    </>
  );
};
export default Productos;

