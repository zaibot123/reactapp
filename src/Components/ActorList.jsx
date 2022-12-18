import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Actor from "./Actor";



const ActorList =  ({listOfResults}) =>{

const first50Actors =  listOfResults.slice(0, 5);
const last50Actors = listOfResults.slice(5, 10);
return (
 <>
<div className="list-title">
    <h1>Actors</h1>
</div>

    <Row >
    <Col >   {first50Actors.map(x => <Actor all={x} key={x.id}/>)}</Col>
    <Col>   {last50Actors.map(x => <Actor all={x} key={x.id}/>)}</Col>
    </Row>

</>
)
}
export default ActorList;