import React from "react";
import Button from 'react-bootstrap/Button';
import PosterCardList from "./PosterCardList";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';


const PosterCard = ({PosterCardList}) =>{
  
    return (

<MDBRow>
  <MDBCol className="mb-2">
    <MDBCardImage src={PosterCardList}          
    alt="image 1" className="w-100 rounded-3" />
    </MDBCol>
    <MDBCol className="mb-2">
    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
    alt="image 1" className="w-100 rounded-3" />
 </MDBCol>
</MDBRow>)}

export default PosterCard;