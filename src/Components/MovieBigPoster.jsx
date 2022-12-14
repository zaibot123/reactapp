import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

const PutBookmark = async (MovieID) => {
  console.log(MovieID)
  const response = 
  await fetch("http://localhost:5001/api/movies/bookmark"+ "?username=Troels&title_id="+String(MovieID), {method: "PUT"});}

const DeleteBookmark = async (MovieID) => {
  const response = 
  await fetch("http://localhost:5001/api/movies/bookmark"+ "?username=Troels&title_id="+String(MovieID), {method: "DELETE"});}

const PostRating = async (MovieID,Rating) => {
const rating=10;
const response = 
await fetch("http://localhost:5001/api/user/rate?title_id="+String(MovieID)+"&username=Troels&rating="+String(Rating), {method: "POST"});
}

  

function MovieBigPoster({MovieID}){
    let [Title,setTitle] =useState(null)
    let [Status,setStatus]=useState("loading")
    let [Poster,setPoster]=useState(null)
    let [rating, setRating] = useState("");
    let [Plot,setPlot]=useState(null)
    useEffect(() => {
        const url="http://localhost:5001/api/movies/"+MovieID;
    
        const fetchData = async () => {
          const response = await fetch(url);
          const Data = await response.json();
          console.log(Data)
          setTitle(Data[0]['titleName'])
          setPoster(Data[0]['poster'])
          setPlot(Data[0]['titlePlot'])
        };
        fetchData();
      },[]);
return( 
  <><div className="list-title">
    <h1>{Title}</h1>
  </div>

  <div style={{ width: '352px' }}>
      <CardGroup>
        <Card>
          <Card.Img style={{ width: '300px' }} variant="top" src={Poster} alt="alternatetext" />
          <Card.Body>
           

          <Form className="d-flex">
                   <Form.Control
                         type="Rating"
                         placeholder="Input number 1-10"
                         className="me-2"
                         aria-label="Search" 
                         value={rating}
                         onChange={e => setRating(e.target.value)}
          
                       />
                      <Button onClick = {()=>PostRating(MovieID,rating)}>Rate!</Button>
                     </Form>

           <Button onClick = {()=>PutBookmark(MovieID)}>Bookmark</Button>
           <Button onClick = {()=>DeleteBookmark(MovieID)}>Remove Bookmark</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{Plot}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div></>
)
}
export default MovieBigPoster;