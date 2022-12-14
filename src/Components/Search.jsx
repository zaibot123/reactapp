import React, {useEffect, useState, useContext} from "react";
import TitleList from "./TitleList";
import UsernameContext from "./UsernameContext";
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Search () {
    let [result,setResult]=useState(null)
    let [status, setStatus]=useState('Loading')
    const {search} = useParams()
    const username = useContext(UsernameContext);


    useEffect(() => {
     const fetchData = async () => { 
     const response = await fetch("http://localhost:5001/api/movies?searchtype=simple&username=Troels&title="+search+"&page=1&pageSize=10");
     const newData = await response.json();  
     setResult(newData['items'])
     setStatus('Done')
     
   };
   fetchData();
 },[username]);

 if (status==="Done") { 



 
  return(

    <TitleList listOfResults={result}/>
 )
   
 } else {
   return (
    <Spinner style={{position: 'absolute', left:'50%', top: '50%',}}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    )
 }
}
export default Search;