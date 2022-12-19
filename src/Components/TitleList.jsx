import React from "react";
import Title from "./Title";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TitleList =  ({listOfResults}) =>{

console.log(listOfResults)

    const first5Movies =  listOfResults.slice(0, listOfResults.length/2);
    const last5Movies = listOfResults.slice(listOfResults.length/2, listOfResults.length);

 


return (
 <>
<div className="list-title">
    <h1>Movies</h1>
</div>

<div class="row justify-content-around">
    <div class="col-4">
    {first5Movies.map(x => <Title all={x} key={x.titleId}/>)}
    </div>
    <div class="col-4">
    {last5Movies.map(x => <Title all={x} key={x.titleId}/>)}
    </div>
  </div>

</>
)
}
export default TitleList;