import React from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const MovieWithRating = ({PopularMovie}) =>{
let movieUrl = "/movies/"+PopularMovie.titleId

return (
<Card>
 <Card.Body>
  <Nav.Link href={movieUrl}>{PopularMovie.titleName}</Nav.Link>
    Rating: {PopularMovie.rating}
  </Card.Body>
 </Card>  
)
}
export default MovieWithRating;
        