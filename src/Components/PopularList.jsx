import { useState } from "react";
import Movie from "./Movie.jsx";
import MovieNoRating from "./MovieNoRating.jsx";

const PopularList =  ({PopularList,BigMovie,Title}) =>{
if (Title){
    return (
     <>
    <div className="list-title">
      <h1>{Title}</h1>
    </div>
    {PopularList.map(PopularMovie => <Movie PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}

    </>
    )
}
else return(
    PopularList.map(PopularMovie => <MovieNoRating PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)
)
    }
    export default PopularList;