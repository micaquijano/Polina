import React from 'react'
import './assets/Carrousel.css'
import { Carousel } from 'react-bootstrap'
import CarrouselImg from './assets/imagenes/carrousel1.png';
import CarrouselImg2 from './assets/imagenes/carrousel2.jpg';
import CarrouselImg3 from './assets/imagenes/CarrouselI3.jpg';

export const Carrousel = () => {
  return (
    <>
    <Carousel className='Container'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={CarrouselImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={CarrouselImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarrouselImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </>
  )
}
