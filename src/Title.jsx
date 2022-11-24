import React from "react";


const Title = ({name,handleClick,handleEdit}) =>{

    return (
        <div className="title" key ={name}>
        <h1>{name}</h1>
        <div className="button">
        <button onClick={ () =>handleClick(name)}>
            delet this
        </button>
        <button onClick={ () =>handleEdit(name)}>
            
            edit this
        </button>
        </div>
        </div>
    )
}

export default Title;