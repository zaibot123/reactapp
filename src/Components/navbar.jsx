import { FormLabel, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {setMessage, useRef, useState} from "react";
import {onClick, onSubmit} from "react";
import userEvent from '@testing-library/user-event';





function NavBar(){
   let [userInput, setUserInput] = useState("");
   return (
         <>
           {['md'].map((expand) => (
             <Navbar key={expand} bg="light" expand={expand} className="mb-3">
               <Container fluid>
               <Navbar.Brand href="/"> Gruppe 3 {/* <img
             src="https://forskning.ruc.dk/files-asset/80534321/mir_small.jpg?w=160&f=webp"
             width="50"
             height="50"
             className="d-inline-block align-center"
             alt="Morten"  
           /> */}</Navbar.Brand>
                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                 <Navbar.Offcanvas
                   id={`offcanvasNavbar-expand-${expand}`}
                   aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                   placement="end"
                     >
                   <Offcanvas.Header closeButton>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                   <Form className="d-flex">
                   <Form.Control
                         type="search"
                         placeholder="Search"
                         className="me-2"
                         aria-label="Search" 
                         value={userInput}
                         onChange={e => setUserInput(e.target.value)}
                         
                       />
                       <Button  variant="outline-success" href={`/search/${userInput}`}>Search </Button>
                     </Form>
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                       <Nav.Link href="/">Home</Nav.Link>
                       <NavDropdown
                         title="Menu"
                         id={`offcanvasNavbarDropdown-expand-${expand}`}
                       >
                         <NavDropdown.Item href="/user/register">Register new user</NavDropdown.Item>
                         <NavDropdown.Item href="/user/edit">
                           Edit user
                         </NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="/user/Troels">
                           Log in
                         </NavDropdown.Item>
                       </NavDropdown>
                     </Nav>
                   </Offcanvas.Body>
                 </Navbar.Offcanvas>
               </Container>
             </Navbar>
           ))}
         </>
       );

}
export default NavBar







// return(
//    <>
//    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
//    <Navbar bg="dark" variant="dark">
//        <Container style={{width: 100}}>
//           <Navbar.Brand href="/">
//           <img
//              src="https://forskning.ruc.dk/files-asset/80534321/mir_small.jpg?w=160&f=webp"
//              width="50"
//              height="50"
//              className="d-inline-block align-center"
//              alt="Morten"
//            />
//           </Navbar.Brand>

         

//           </Container>
//        <Container>
//        <SearchButton/>        
//        </Container>
//        <Nav className="d-inline-block align-center">
//        <Container>
//        <Nav.Link href="login">Login</Nav.Link>
//        </Container>
//        </Nav>
//      </Navbar>
//      </>
// )
