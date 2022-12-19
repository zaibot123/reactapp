import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";



function RegisterUser() {
    let [username,setUsername]=useState(null)
    let [password,setPassword]=useState(null)
    let [password2, setPassword2] = useState(null);
    let [status, setStatus] = useState("Done");
    const navigate = useNavigate();
    
    const RegisterUserFunction = async () => {
    
        setStatus("Loading");
    
        if(password==password2){
           
       
        const response = 
        await fetch("http://localhost:5001/api/register", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"userName": username, "password":password})
        })
      
       
          if(response.status=="200"){
            setStatus("Done");
                //redirect to login
              alert(username + " registered");
              navigate("/user/login");
          }
          else { setStatus("Done"); alert("Weak password or already registered")}
         
        }

        else {setStatus("Done"); alert("Passwords must match"); }
        }



if (status=="Done"){
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          
          <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
          <Form.Control
                         type="Username"
                         placeholder="Username"
                         className="me-2"
                         aria-label="Username" 
                         value={username}
                         onChange={e => setUsername(e.target.value)}
                       />
                       </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Password</Form.Label>           
          <Form.Control
                         type="Password"
                         placeholder="Password"
                         className="me-2"
                         aria-label="Password" 
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                       />
                   </Form.Group>  
                     <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Repeat password</Form.Label>     
          <Form.Control
                         type="Password"
                         placeholder="Repeat Password"
                         className="me-2"
                         aria-label="Repeat Password"
                         value={password2}
                         onChange={e => setPassword2(e.target.value)}
                       />
                       </Form.Group>
                       </Form>

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>RegisterUserFunction()}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
    }

    return (
    <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default RegisterUser;