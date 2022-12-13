import Carousel from 'react-bootstrap/Carousel';
import Title from './Title'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';


function MovieSlideShow() {

  let [poster1, setPoster1]=useState(null)
  let [title1, setTitle1]=useState(null)  
  let [poster2, setPoster2]=useState(null)
  let [title2, setTitle2]=useState(null)  
  let [poster3, setPoster3]=useState(null)
  let [title3, setTitle3]=useState(null)

  useEffect(() => {
    const fetchData = async () => { 

      const Response = await fetch("http://localhost:5001/api/movies/popular");
      const Data = await Response.json();
      setTitle1(Data[0]['titleName'])
      setPoster1(Data[0]['poster']) 
      setTitle2(Data[3]['titleName'])
      setPoster2(Data[3]['poster']) 
      setTitle3(Data[2]['titleName'])
      setPoster3(Data[2]['poster'])

    };
    fetchData();
  },[]);
    
  
  return (
    
    <Card  style={{left:'15%', width: '400px'}}>
    <Carousel>
      <Carousel.Item>
      <Card.Img key = "1" variant="top" src={poster1} />
      <Card.Body>
        <Card.Title>{title1}</Card.Title>
      </Card.Body>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img key = "2" variant="top" src={poster2} />
      <Card.Body>
        <Card.Title>{title2}</Card.Title>
      </Card.Body>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img key = "3" variant="top" src={poster3} />

      <Card.Body>
        <Card.Title>{title3}</Card.Title>
      </Card.Body>
      </Carousel.Item>
    </Carousel>
    </Card>
  );
}

export default MovieSlideShow;