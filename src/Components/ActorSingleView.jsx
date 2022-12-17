import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Route, { Navigate } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Actor from "./Actor";
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "./MovieList";
import { Card } from "react-bootstrap";



const ActorSingleView = () =>{

    let testList=['1','2','3']

    const { id } = useParams()
    let [data, setData] = useState(null);
    let[coactors, setCoactors] = useState(null);
    let[actorName, setActorName] = useState(null);

    useEffect(() => {
          
          const DataUrl="http://localhost:5001/api/actors/"+id;
          const fetchData = async () => {
          const response = await fetch(DataUrl);
          const Data = await response.json();
          setData(Data)
          console.log("hej")
        

        };

        const fetchCoactors = async () => {
   
            const CoactorsUrl="http://localhost:5001/api/actors/coactors/"+data.name;
            const response = await fetch(CoactorsUrl);
            const CoactorData = await response.json();
            setCoactors(CoactorData)
          };

          fetchData();
          fetchCoactors();
     
        
      },[]);



//onClick={()=>navigate(movieUrl)}
return (
   <>
    {/* {console.log(data)} */}
    <Actor all={data}/>
<div className="list-title">
      <h1>Coactors</h1>
    </div>

   
  {/* <Nav.Link >{coactors.map(x => <Card><Card.Body key={x.id}>{x.name}</Card.Body></Card>)}</Nav.Link> */}

</>
    )
}
export default ActorSingleView;