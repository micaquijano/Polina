import React from 'react'
import './assets/Carrousel.css'
import { Carousel } from 'react-bootstrap'
import CarrouselImg from './assets/imagenes/slaider.png';
import CarrouselImg2 from './assets/imagenes/carousel2.png';
import CarrouselImg3 from './assets/imagenes/carousel6.png';

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
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={CarrouselImg2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarrouselImg3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> 
    </>
  )
}
