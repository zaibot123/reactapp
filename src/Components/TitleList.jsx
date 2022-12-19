import React from "react";
import Title from "./Title";


const TitleList =  ({listOfResults}) =>{

console.log(listOfResults)

    const first5Movies =  listOfResults.slice(0, listOfResults.length/2);
    const last5Movies = listOfResults.slice(listOfResults.length/2, listOfResults.length);

 


return (
 <>
<div className="list-title">
    <h1>Movies</h1>
</div>

<div className="row justify-content-around">
    <div className="col-4">
    {first5Movies.map(x => <Title all={x} key={x.titleId}/>)}
    </div>
    <div className="col-4">
    {last5Movies.map(x => <Title all={x} key={x.titleId}/>)}
    </div>
  </div>

</>
)
}
export default TitleList;