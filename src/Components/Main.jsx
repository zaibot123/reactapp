import React, {useEffect, useState} from "react";
import MovieList from "./MovieList";
import BigMovie from './BigMovie';

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
      return <MovieList PopularList={popularMovies} handleClick={BigMovie} Title="Top 100 Movies"/>
    } else {
      return null;
    }
    }

    export default Main;