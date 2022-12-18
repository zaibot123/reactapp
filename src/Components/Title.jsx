import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Route, { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const Title = ({all}) =>{
  const navigate = useNavigate();
  let movieUrl = "/movies/"+all.titleId

    return (
      
<div className="card">
<Nav.Link  onClick={()=> navigate(movieUrl)} >
    <div className="title">
    {all.titleName} 
    </div>
    
  <div className="card-body">
  <img className="card-img-top" src={all.poster}/>
    <p className="card-text"> {all.titlePlot.slice(0,100)}</p>

  </div>
  </Nav.Link>
</div>

    )
}
        

export default Title;