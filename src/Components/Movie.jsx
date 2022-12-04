import React from "react";
import { NavLink } from "react-router-dom";

const PopularMovie = ({PopularMovie,handleClick}) =>{
  let URLwithRightPORT=PopularMovie.url.replace (5001,3000)
    return (

<div>

<NavLink className="btn" to ="movies/tt2301451"></NavLink>
  <a href={URLwithRightPORT}>{PopularMovie.titleName}</a>
  -  Rating: {PopularMovie.rating}
</div>
    )
}
export default PopularMovie;
        