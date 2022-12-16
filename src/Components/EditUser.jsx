



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useContext, useState} from'react';
import UsernameContext from './UsernameContext';
import { Nav } from 'react-bootstrap';
import Main from './Main';
import * as React from "react";
import Route, { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function EditUser() {
  let [email, setEmail] = useState("");
  let [photo, setPhoto] = useState("");
  let [bio, setBio] = useState("");
  const navigate = useNavigate();
  let {getUser, setAUser} = useContext(UsernameContext);

  const editUserFunction = async () => {
    const response = 
    await fetch("http://localhost:5001/api/user/edit", { 
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": getUser,"email":email, "bio":bio, "photo":photo})
    })
          navigate("/user/"+getUser);
    }

  


  return (
<Form style={{position: 'absolute', left:'42%', top: '30%',}}>
<Form.Group className="mb-3" controlId="formGroupEmail">
  <Form.Label>Change email address</Form.Label>
  <Form.Control
                   type="search"
                   placeholder="type email address"
                   className="me-2"
                   aria-label="Search" 
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   
                 />

</Form.Group>
<Form.Group className="mb-3" controlId="formGroupPassword">
  <Form.Label>Change photo link</Form.Label>
  <Form.Control
                   type="search"
                   placeholder="put photo link"
                   className="me-2"
                   aria-label="Search" 
                   value={photo}
                   onChange={e => setPhoto(e.target.value)}
                   
                 />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Bio</Form.Label>
        <Form.Control as="textarea" rows={3}   
                    value={bio}
                   onChange={e => setBio(e.target.value)}/>
      </Form.Group>
<Button  variant="outline-success" onClick={()=>editUserFunction()}>Submit change </Button>
</Form>


  );
}

export default EditUser;