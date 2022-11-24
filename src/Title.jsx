import React from "react";


const Title = ({name,handleClick}) =>{

    return (
        <div className="title" key ={name}>
               <h1>{name}</h1>
               <div className="buttondelete">
                      <button onClick={ () =>handleClick(name)}>
                        delet this
                     </button>
              </div>
        </div>
    )
}

export default Title;