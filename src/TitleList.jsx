import React from "react";
import Title from "./Title";

const TitleList =  ({name, handleClick,all}) =>{



return (
 <>
 {all.map(all => <Title all={all} key={all.titleId} handleClick={handleClick}/>)}
 {/*
{name.map(name => <Title name={name} handleClick={handleClick} key={name}  />)}
*/}



</>
)
}
export default TitleList