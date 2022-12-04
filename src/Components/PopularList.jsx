import { useState } from "react";
import Movie from "C:\\Users\\Tobia\\Reactsjovt\\reactapp\\src\\Components\\Movie.jsx";

const PopularList =  ({PopularList,BigMovie}) =>{

    return (
     <>
    <div className="popular-title">
        <h1>Top 100 Movies!</h1>
    </div>

    {PopularList.map(PopularMovie => <Movie PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}

    </>
    )
    }
    export default PopularList;