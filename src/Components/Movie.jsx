import React from "react";
import { NavLink } from "react-router-dom";

const PopularMovie = ({PopularMovie,handleClick}) =>{
    return (

<div>

<NavLink className="btn" to ="movies/tt2301451"></NavLink>
  <a href={PopularMovie.url}>{PopularMovie.titleName}</a>
  -  Rating: {PopularMovie.rating}
</div>
    )
}
export default PopularMovie;
        