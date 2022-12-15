import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function LogIn() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  return (
    <Form style={{position: 'absolute', left:'40%', top: '40%',}}>
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
      <Button  variant="outline-success" href={`/user/${username}`}>Log in </Button>
    </Form>
  );
}

export default LogIn;