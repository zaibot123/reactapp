import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import ListOfPosters from "./ListWithPoster";
import ListOfPostersFetch from "./ListWithPosterFetch";
import {useContext} from'react';
import UsernameContext from "./UsernameContext";
import { useParams } from "react-router";



const PutBookmark = async (MovieID, getUser) => {
  console.log(MovieID)
  const response = 
  await fetch("http://localhost:5001/api/movies/bookmark"+ "?username="+getUser+"&title_id="+String(MovieID), 
  {method: "PUT"});}

const DeleteBookmark = async (MovieID, getUser) => {
  const response = 
  await fetch("http://localhost:5001/api/movies/bookmark"+ "?username="+getUser+"&title_id="+String(MovieID), 
  {method: "DELETE"});}

const PostRating = async (MovieID,Rating, getUser) => {

const response = 
await fetch("http://localhost:5001/api/user/rate?title_id="+String(MovieID)+"&username="+getUser+"&rating="+String(Rating), 
{method: "POST"});
}

const DeleteRating = async(MovieID,rating, getUser) => {
 
  const response = 
  await fetch("http://localhost:5001/api/user/rate?title_id="+String(MovieID)+"&username="+getUser,{method: "DELETE"});
}

  

function MovieBigPoster(){
    let {getUser, setAUser} = useContext(UsernameContext);
    let [Title,setTitle] =useState(null)
    let [Status,setStatus]=useState("loading")
    let [Poster,setPoster]=useState(null)
    let [rating, setRating] = useState("");
    let [Plot,setPlot]=useState(null)
 
    const {titleId} = useParams();

    useEffect(() => {
    
        const url="http://localhost:5001/api/movies/"+titleId;
    
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
  <Row>
    
      <CardGroup>

      <Col>
        <Card>
          <Card.Img style={{ width: '300px' }} variant="top" src={Poster} alt="alternatetext" />


          {getUser == "Guest" ?
                      <><i>Want to rate or bookmark? Register as a new user or log in</i></>
                      : <>
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
                      <Button onClick = {()=>PostRating(titleId,rating, getUser)}>Rate!</Button>
                      <Button onClick = {()=>DeleteRating(titleId,rating, getUser)}>Delete Rate!</Button>
                     </Form>

           <Button onClick = {()=>PutBookmark(titleId, getUser)}>Bookmark</Button>
           <Button onClick = {()=>DeleteBookmark(titleId, getUser)}>Remove Bookmark</Button>
          </Card.Body>
                      </>}








          <Card.Footer>
            <small className="text-muted">{Plot}</small>
          </Card.Footer>
        </Card>
        </Col>

        <Col >
      <ListOfPostersFetch urlToFetch={"http://localhost:5001/api/movies/"+titleId+"/similar"} width={250} height={400}/>
      </Col>

      </CardGroup>
      </Row>
    </div>
    </>
)
}
export default MovieBigPoster;