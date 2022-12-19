import React, {useEffect, useState, useContext} from "react";
import MovieList from "./MovieList";
import MovieSlideShow from "./MovieSlideShow";
import Row from 'react-bootstrap/Row';
import useFetch from "./useFetch";
import Col from 'react-bootstrap/Col';
import ListOfPosters from "./ListWithPosterFetch";
import MovieBigPoster from "./MovieBigPoster";
import { useNavigate } from "react-router-dom";
import UsernameContext from "./UsernameContext";
import { Spinner } from "react-bootstrap";



function Main () {
    let {getUser, setAUser} = useContext(UsernameContext);
    let [popularMovies, setPopularMovies]=useState(null);
    let[status, setStatus]=useState("Loading")
    useEffect(() => {
      
      const fetchData = async () => {
        setStatus("Loading")
        const response = await fetch('http://cit.ruc.dk/cit03/api/movies/popular');
        const newData = await response.json();
        setPopularMovies(newData);  
        setStatus("Done")
      };

    
      fetchData();
      
    },[]);
    
   if(status=="Done"){
      return (
      <>

      <div className="list-title">
          
        {getUser === "Guest" ? <h1>For full features: Log in </h1>:<h1>Welcome back {getUser}</h1>}
         
      </div>

        <MovieSlideShow moviesForSlide={popularMovies.slice(0,4)} />
 
      <MovieList PopularList={popularMovies} handleClick={MovieBigPoster} Title="Top 100 Movies" /></>)
}
      else return (
        <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )
    
    }

    export default Main;