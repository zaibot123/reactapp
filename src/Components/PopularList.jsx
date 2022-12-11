import { useState } from "react";
import Movie from "./Movie.jsx";
import MovieNoRating from "./MovieNoRating.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const PopularList =  ({PopularList,BigMovie,Title}) =>{
    const first50Movies = PopularList.slice(0, 50);
    const last50Movies = PopularList.slice(50, 100);
if (Title)
{
    return (
     <>
    <div className="list-title">
      <h1>{Title}</h1>
    </div>
    <div className = "rowList">
    <Row >
    <Col > {first50Movies.map(PopularMovie => <Movie PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}</Col>
    <Col> {last50Movies.map(PopularMovie => <Movie PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}</Col>
    </Row>
    </div>
    </>
    )
}

else {
return(
    <>
    {PopularList.map(PopularMovie => <MovieNoRating PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}
    </>
)}
}
    export default PopularList;