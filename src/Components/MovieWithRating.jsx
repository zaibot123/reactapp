import React from "react";
// import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


const MovieWithRating = ({PopularMovie,handleClick}) =>{
  // let URLwithRightPORT= movie.url.replace (5001,3000);
  console.log(PopularMovie);
return (
  
<Card>
 <Card.Body>
  {/* <Nav.Link href={URLwithRightPORT}>{movie.titleName}</Nav.Link> */}
    Rating: {PopularMovie.rating}
    {PopularMovie.titleId}
  </Card.Body>
 </Card>

)
}
export default MovieWithRating;
        