import React from "react";
import Button from 'react-bootstrap/Button';

const Title = ({name,handleClick,all}) =>{
    return (
        <div className="container p-5 my-5 bg-dark text-white" key ={name}>
               <h1>{all.titleName}</h1>
               <img className="poster" src={all.poster} alt={""}/>
               <div className="buttondelete">
                      <Button variant ="primary" onClick={ () =>handleClick(all.titleName)} className>
                        delet this
                     </Button>
              </div>
        </div>
    )
}

export default Title;