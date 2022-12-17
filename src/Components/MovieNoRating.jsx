import React from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Route, { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const MovieNoRating = ({PopularMovie, titleId}) =>{

    let movieUrl = "/movies/"+PopularMovie.titleId
    const navigate = useNavigate();
    return (
    <Card>
     <Card.Body>
      <Nav.Link onClick={()=>navigate(movieUrl)}>{PopularMovie.titleName}</Nav.Link>
        {PopularMovie.titleId}
      </Card.Body>
     </Card>  
    )
    }
export default MovieNoRating;
        

