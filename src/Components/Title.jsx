import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const Title = ({all}) =>{
  let movieUrl = "/movies/"+all.titleId

    return (
      
<div className="card">
<Nav.Link  href={movieUrl}>
    <div className="title">
    {all.titleName} 
    </div>
    
  <div className="card-body">
  <img className="card-img-top" src={all.poster}/>
    <p className="card-text"> {all.plot.slice(0,100)}</p>

  </div>
  </Nav.Link>
</div>

    )
}
        

export default Title;