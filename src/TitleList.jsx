import React from "react";
import Title from "./Title";

const TitleList =  ({name, handleClick}) =>{
return (
 <>
{name.map(name => <Title name={name} handleClick={handleClick} key={name}/>)}
</>
)
}
export default TitleList