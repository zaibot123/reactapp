import React, { useEffect, useState, useContext } from "react";
import TitleList from "./TitleList";
import UsernameContext from "./UsernameContext";
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
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
        <Container>
        <Row>
        <Col md={4}><Button onClick={function(){ 
         setCurrentPage(alt['prev']); fetchPage();
        }}>Prev</Button></Col>
        
        <Col md={{ span: 4, offset: 4 }}><Button onClick={function(){ 
         setCurrentPage(alt['next']); fetchPage(); 
        }}>Next</Button></Col>
      




        {/* <div class="row">
  <div class="col-md-4"><Button onClick={function () {
          setCurrentPage(alt['prev']);
          fetchPage();
        }}>Prev</Button></div>
  <div class="col-md-4 ml-auto">  <Button onClick={function () {
          fetchPage();
          setCurrentPage(alt['next']);
        }}>Next</Button></div>
</div> */}
        
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