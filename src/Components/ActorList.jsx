import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Actor from "./Actor";



const ActorList =  ({listOfResults}) =>{

const first50Movies =  listOfResults.slice(0, 5);
const last50Movies = listOfResults.slice(5, 10);
return (
 <>
<div className="list-title">
    <h1>Actors</h1>
</div>

    <Row >
    <Col >   {first50Movies.map(x => <Actor all={x} key={x.id}/>)}</Col>
    <Col>   {last50Movies.map(x => <Actor all={x} key={x.id}/>)}</Col>
    </Row>

</>
)
}
export default ActorList;