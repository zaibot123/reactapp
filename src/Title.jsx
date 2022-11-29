import React from "react";
import Button from 'react-bootstrap/Button';

const Title = ({name,handleClick,all}) =>{
    console.log(all)
    return (
        <div className="container p-5 my-2 bg-dark text-white" key ={name}>
            <div className="title">
               <h1>{all.titleName}</h1>
               <p>{all.titleType}</p>

               </div>
               <img className="poster" src={all.poster} alt={""}/>
               <ul> 
                <li>number of ratings: {all.nrRatings}</li>
                <li>average rating: {all.avgRating}</li>
                <li>runtime: {all.runtime}</li>
               </ul>
               <div className="buttondelete">
                      <Button variant ="primary" onClick={ () =>handleClick(all.titleName)} className>
                        delet this
                     </Button>
              </div>
        </div>
    )
}

export default Title;