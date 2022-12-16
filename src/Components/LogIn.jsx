import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useContext, useState} from'react';
import UsernameContext from './UsernameContext';
import { Nav } from 'react-bootstrap';
import Main from './Main';
import * as React from "react";
import Route, { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";






function LogIn() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  let {getUser, setAUser} = useContext(UsernameContext);

    const LoginFunction = async () => {
    const response = 
    await fetch("http://localhost:5001/api/user/login", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"userName": username, "password":password})
    })
   
      if(response.status=="200"){
   
          setAUser(username);
          navigate("/");
      }
    }


  return (

    <Form style={{position: 'absolute', left:'42%', top: '30%',}}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
                         type="search"
                         placeholder="Username"
                         className="me-2"
                         aria-label="Search" 
                         value={username}
                         onChange={e => setUsername(e.target.value)}
                         
                       />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
                         type="search"
                         placeholder="Password"
                         className="me-2"
                         aria-label="Search" 
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         
                       />
      </Form.Group>
      <Button  variant="outline-success" onClick={()=>LoginFunction()}>Log in </Button>
    </Form>
  );
}

export default LogIn;