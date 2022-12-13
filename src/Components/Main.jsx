import React, {useEffect, useState} from "react";
import MovieList from "./MovieList";
import BigMovie from './BigMovie';
import MovieSlideShow from "./MovieSlideShow";
import Row from 'react-bootstrap/Row';
import useFetch from "./useFetch";
import Col from 'react-bootstrap/Col';
import ListOfPosters from "./ListWithPosterFetch";




function Main () {
    let [popularMovies, setPopularMovies]=useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:5001/api/movies/popular');
        const newData = await response.json();
        setPopularMovies(newData);  
      };
      fetchData();
    },[]);
    
    if (popularMovies) {
      return (
      <>
      <Row >
       <Col >
        <MovieSlideShow moviesForSlide={popularMovies.slice(0,4)}/>
       </Col>
      <Col >
      <ListOfPosters urlToFetch={"http://localhost:5001/api/movies/tt2301451/similar"}/>
      </Col>
      </Row>
      <MovieList PopularList={popularMovies} handleClick={BigMovie} Title="Top 100 Movies" /></>)
    } else {
      return null;
    }
    }

    export default Main;