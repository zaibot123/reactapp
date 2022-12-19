import React from "react";
import Nav from 'react-bootstrap/Nav';
import { useNavigate, useParams } from "react-router-dom";
import Actor from "./Actor";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Wordcloud from "./WordCloud";




const ActorSingleView = () =>{

   

    const { id } = useParams()
    let [data, setData] = useState("");
    let[coactors, setCoactors] = useState(null);
    let[actorName, setActorName] = useState(null);
    let[status, setStatus]= useState("Loading");


    useEffect(() => {
          setStatus("Loading");
          const DataUrl="http://localhost:5001/api/actors/"+id;
          const fetchData = async () => 
          {
          const response = await fetch(DataUrl);
          const Data = await response.json();
          setData(Data)

          };
        
          const fetchCoactorData = async () => { 
          const CoactorsUrl="http://localhost:5001/api/actors/coactors/"+id;
          const response = await fetch(CoactorsUrl);
          const CoactorData = await response.json();
          setCoactors(CoactorData)
          setStatus("Done")
          ;}


          fetchData();
          fetchCoactorData();

      },[]);

      



//onClick={()=>navigate(movieUrl)}

if(status==="Done"){
return (
   <>
<Row>

<Col><Actor all={data}/></Col>
<Col><Wordcloud DataUrl={"http://localhost:5001/api/actors/words/"+data.name} style={{ position: 'absolute', left: '50%', top: '20%', }}/></Col>
</Row>
    
    
    <div className="list-title">  
      <h1>Coactors</h1>
    </div>
    <Nav.Link >{coactors.map(x => <Card><Card.Body key={x.id}>{x.name}</Card.Body></Card>)}</Nav.Link>
  

</>
    )
}

else {

  return (
      <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
}
}
export default ActorSingleView;