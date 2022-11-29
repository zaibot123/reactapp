import React from "react";
import Title from "./Title";

const TitleList =  ({handleClick, handleLink, all}) =>{
return (
 <>
<div className="list-title">
    <h1>Movies</h1>
</div>


 {all.map(all => <Title all={all} key={all.url} handleClick={handleClick} handleLink={handleLink}/>)}
</>
)
}
export default TitleList