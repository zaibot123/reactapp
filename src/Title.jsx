import React from "react";
import Button from 'react-bootstrap/Button';


const Title = ({all}) =>{

    return (
    
<div class="card">
    <div class="title">
    {all.titleName} 
    </div>
  <div className="card-body">
  <img className="card-img-top" src={all.poster}/>
    <p className="card-text"> {all.plot.slice(0,100)}</p>

<button class="button-62" onClick={() => window.location.href=all.url}>
Se Mere
 </button>
  </div>
</div>
    )
}
        

export default Title;