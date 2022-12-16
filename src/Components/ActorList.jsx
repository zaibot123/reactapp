import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Actor from "./Actor";



const ActorList =  ({listOfResults}) =>{

const first50Movies =  listOfResults.slice(0, 50);
const last50Movies = listOfResults.slice(50, 100);
return (
 <>
<div className="list-title">
    <h1>Actors</h1>
</div>

    <Row >
    <Col >   {first50Movies.map(x => <Actor all={x} key={x.id}/>)}</Col>
    <Col>   {last50Movies.map(x => <Actor all={x} key={x.id}/>)}</Col>
    </Row>

 {/* {listOfResults.map(x => <Title all={x} key={x.url}/>)}  */}
</>
)
}
export default ActorList;