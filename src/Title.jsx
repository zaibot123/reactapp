import React from "react";
import Button from 'react-bootstrap/Button';

const Title = ({name,handleClick, allinfo}) =>{
    return (
        <div className="container p-5 my-5 bg-dark text-white" key ={name}>
               <h1>{name}</h1>
            
               <div className="buttondelete">
                      <Button variant ="primary" onClick={ () =>handleClick(name)} className>
                        delet this
                     </Button>
              </div>
        </div>
    )
}

export default Title;