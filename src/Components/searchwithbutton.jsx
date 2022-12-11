import React from "react";
import { NavLink, useSearchParams} from "react-router-dom";
import {Search } from "react"




function SearchButton(search){

    

    return (
    <div className="header-search">
    <input
        type="text"
        id="h"
        placeholder="Search..."
        name="s"
     
    />

     {console.log(JSON.stringify(search) + " Dette er search")}
   
    <NavLink className="btn" to = {`/search/${'lo'}`}> Søg </NavLink>
    </div>
    
    )
   
}
export default SearchButton 