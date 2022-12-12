import React from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const MovieNoRating = ({PopularMovie,handleClick, titleId}) =>{

    let movieUrl = "/movies/"+PopularMovie.titleId
    
    return (
    <Card>
     <Card.Body>
      <Nav.Link href={movieUrl}>{PopularMovie.titleName}</Nav.Link>
        {PopularMovie.titleId}
      </Card.Body>
     </Card>  
    )
    }
export default MovieNoRating;
        