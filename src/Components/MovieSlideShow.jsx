import Carousel from 'react-bootstrap/Carousel';
import Title from './Title'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieSlideShow(Title) {
  return (
    <Card  style={{left:'15%', width: '400px'}}>
    <Carousel>
      <Carousel.Item>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZDYyNWMwN2EtZTQ5NS00YWE1LTkxYzItMTNlNDNmNWY2MTZmXkEyXkFqcGdeQXVyMTUyNDA2NjY5._V1_SX300.jpg" />
      <Card.Body>
        <Card.Title>Til Death Do Us Part Journey to the Cross</Card.Title>
      </Card.Body>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BYzFmNjIxMGYtNDI2Mi00MGJlLTkzMmYtZTUzZWRjOTgyMzhmXkEyXkFqcGdeQXVyMjQwMjQyMzM@._V1_SX300.jpg" />
      <Card.Body>
        <Card.Title>25 IN 24</Card.Title>
      </Card.Body>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMTU0NTg0MDM2Nl5BMl5BanBnXkFtZTcwNzk5MDgzMQ@@._V1_SX300.jpg" />
      <Card.Body>
        <Card.Title>365 Boots on Ground</Card.Title>
      </Card.Body>
      </Carousel.Item>
    </Carousel>
    </Card>
  );
}

export default MovieSlideShow;