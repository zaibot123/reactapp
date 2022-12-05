import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function MovieBigPoster({MovieID}){
    let [Title,setTitle] =useState(null)
    let [Status,setStatus]=useState("loading")
    let [Poster,setPoster]=useState(null)
    let [Plot,setPlot]=useState(null)
  
    useEffect(() => {
        const url="http://localhost:5001/api/movies/"+MovieID;
        console.log(url)
        const fetchData = async () => {
          const response = await fetch(url);
          const newData = await response.json();
          console.log(newData)
          setTitle(newData[0]['titleName'])
          setPoster(newData[0]['poster'])
          setPlot(newData[0]['titlePlot'])
        };
        fetchData();
      },[]);

return( 






<div>

<div className="list-title">
    <h1>{Title}</h1>
</div>



<CardGroup>
<Card>
  <Card.Img variant="top" src={Poster} alt="alternatetext" />
  <Card.Body>
    <Card.Title> {Title}</Card.Title>
    <Card.Text>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">{Plot}</small>
  </Card.Footer>
</Card>
</CardGroup>
</div>





)
}
export default MovieBigPoster;