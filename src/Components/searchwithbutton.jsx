import React from "react";
import { NavLink } from "react-router-dom";


function SearchButton(search){
    return (
    <div className="header-search">
    <input
        type="text"
        id="h"
        placeholder="Search..."
        name="s" 
        />
    <NavLink className="btn" to="/search/gome">Søg</NavLink>
   </div>
    )
}
export default SearchButton 