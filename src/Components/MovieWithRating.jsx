import React from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const MovieWithRating = ({PopularMovie,handleClick, titleId}) =>{

let movieUrl = "/movies/"+PopularMovie.titleId

return (
<Card>
 <Card.Body>
  <Nav.Link href={movieUrl}>{PopularMovie.titleName}</Nav.Link>
    Rating: {PopularMovie.rating}
    {PopularMovie.titleId}
  </Card.Body>
 </Card>  
)
}
export default MovieWithRating;
        