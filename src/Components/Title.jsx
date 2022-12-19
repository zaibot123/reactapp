import React from "react";
import Nav from 'react-bootstrap/Nav';
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
  <img className="card-img-top" src={all.poster} alt={all.titleName}/>
    <p className="card-text"> {all.titlePlot}</p>

  </div>
  </Nav.Link>
</div>

    )
}
        

export default Title;