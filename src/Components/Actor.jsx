import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Route, { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Actor = ({all}) =>{
  console.log(all)
  let actorURL = "/actor/"+all.id
  const navigate = useNavigate();
  
  const age =  () =>{
    if (all.birthYear!=="    " && all.deathYear!=="    ")
    {
    return "died in year" + all.deathYear + "at age "+ all.deathYear-all.birthYear;
    }
    else if(all.birthYear!=="    " && all.deathYear==="    ")
    {
    return 2022-all.birthYear
    }
    else return "unknown";      
  }

  

return (
      
<div className="card">
<Nav.Link  onClick={()=>navigate(actorURL)}>
    <div className="title">
    {all.name} 
    </div>
  <div className="card-body">
  <img className="card-img-top" src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>
    <p className="card-text"> {"age: "+age(all)}</p>
    <p className="card-text"> {"characters: "+all.characters}</p>
  </div>
  </Nav.Link>
</div>

    )
}
export default Actor;