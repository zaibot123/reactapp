import Carousel from 'react-bootstrap/Carousel';
import Title from './Title'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function MovieSlideShow({moviesForSlide}) {
  let [currentID,setCurrentID] =useState(0)

  console.log(moviesForSlide[0].poster) 
  return (
    <Card onSelect={console.log("XD")} style={{left:'15%', width: '400px'}}>
    <Carousel>
      <Carousel.Item>
      <Card.Img variant="top" src={moviesForSlide[0].poster} />
      <Card.Body>
        <Card.Title>{moviesForSlide[0].titleName}</Card.Title>
      </Card.Body>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src={moviesForSlide[1].poster} />
      <Card.Body>
        <Card.Title>{moviesForSlide[1].titleName}</Card.Title>
      </Card.Body>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src={moviesForSlide[2].poster} />

      <Card.Body>
        <Card.Title>{moviesForSlide[2].titleName}</Card.Title>
      </Card.Body>
      </Carousel.Item>
    </Carousel>
    </Card>
  );
}

export default MovieSlideShow;