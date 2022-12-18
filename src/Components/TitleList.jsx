import React from "react";
import Title from "./Title";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TitleList =  ({listOfResults}) =>{

console.log(listOfResults)

    const first5Movies =  listOfResults.slice(0, 5);
    const last5Movies = listOfResults.slice(5, 10);

 


return (
 <>
<div className="list-title">
    <h1>Movies</h1>
</div>

    <Row >
    <Col >   {first5Movies.map(x => <Title all={x} key={x.titleId}/>)}</Col>
    <Col>   {last5Movies.map(x => <Title all={x} key={x.titleId}/>)}</Col>
    </Row>

</>
)
}
export default TitleList;