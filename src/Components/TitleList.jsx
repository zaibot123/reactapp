import React from "react";
import Title from "./Title";

const TitleList =  ({listOfResults}) =>{
return (
 <>
<div className="list-title">
    <h1>Movies</h1>
</div>
 {listOfResults.map(x => <Title all={x} key={x.url}/>)}
</>
)
}
export default TitleList;