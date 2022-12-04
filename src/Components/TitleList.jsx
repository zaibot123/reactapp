import React from "react";
import Title from "./Title";

const TitleList =  ({query}) =>{
    console.log(query)
    console.log("ejCOme")
return (
 <>
<div className="list-title">
    <h1>Movies</h1>
</div>
 {query.map(query => <Title all={query} key={query.url}/>)}
</>
)
}
export default TitleList;