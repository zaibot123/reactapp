import React, {useEffect, useState} from "react";
import PopularList from "./PopularList";

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
      return <PopularList PopularList={popularMovies} handleClick={BigMovie} Title="Top 100 Movies"/>
    } else {
      return null;
    }
    }

    export default Main;