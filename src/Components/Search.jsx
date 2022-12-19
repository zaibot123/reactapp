import React, { useEffect, useState, useContext } from "react";
import TitleList from "./TitleList";
import UsernameContext from "./UsernameContext";
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";




function Search() {
  let { getUser, setAUser } = useContext(UsernameContext);
  let [status, setStatus] = useState('Loading')
  const { search } = useParams()
  let [currentPage, setCurrentPage] = useState("http://localhost:5001/api/movies?searchtype=simple&username=" + getUser + "&title=" + search + "&page=0&pageSize=10")
  let [alt, setAlt] = useState(null);
  



  const fetchPage = async () => {
    setStatus("Loading");
    console.log(currentPage);
    const response = await fetch(currentPage)
    const newData = await response.json();
    setStatus("Done");
    setAlt(newData);
  }

  useEffect(() => {
    fetchPage();
  }, []);

  if (status === "Done") {

    return (
      <>
      
        <TitleList listOfResults={alt['items']} />
        <Container style={{padding:90}}>
        <Row md={2}>
        <Col md={2}><Button onClick={function(){ 
         setCurrentPage(alt['prev']); fetchPage();
        }}>Prev</Button></Col>
        
        <Col md={1}><Button onClick={function(){ 
         setCurrentPage(alt['next']); fetchPage(); 
        }}>Next</Button></Col>
        
</Row>
</Container>
      </>

    )

  } else {
    return (
      <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
}
export default Search;