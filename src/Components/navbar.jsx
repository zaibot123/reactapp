import { FormLabel, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { setMessage, useRef, useState, useContext } from "react";
import { onClick, onSubmit } from "react";
import userEvent from '@testing-library/user-event';
import UsernameContext from './UsernameContext';
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';









function NavBar() {
  let [searchtype, setSearchtype] = useState("Movies");
  let [userInput, setUserInput] = useState("");
  let { getUser, setAUser } = useContext(UsernameContext);
  const navigate = useNavigate();

  function search() {

    if (searchtype == "Movies") {
      console.log("Searching for " + userInput + "Movie")
      navigate("/movies/search/" + userInput)
    }

    else if (searchtype == "Actors") {
      console.log("Searching for " + userInput + "actor")
      navigate("actors/search/" + userInput)
    }

    else if (searchtype == "Best") {
      console.log("Searching for " + userInput + " best")
      navigate("best/search/" + userInput)
    }
  }

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand onClick={() => navigate("/")}> Home </Navbar.Brand>
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


                  <Button onClick={() => search()} variant="outline-success" >Search </Button>
                </Form>

                <Form>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Movies"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={() => setSearchtype("Movies")}

                      />
                      <Form.Check
                        inline
                        label="Actors"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={() => setSearchtype("Actors")}
                      />
                      <Form.Check
                        inline
                        label="Best Match"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={() => setSearchtype("Best")}
                      />

                    </div>
                  ))}
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => navigate("/user/" + getUser)}>{getUser}</Nav.Link>


                  <NavDropdown
                    title="Menu"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {getUser == "Guest" ?
                      <>
                        <NavDropdown.Item onClick={() => navigate("/register")}>Register new user</NavDropdown.Item>
                        <NavDropdown.Divider /><NavDropdown.Item onClick={() => navigate("/user/login")}>
                          Log in</NavDropdown.Item></>
                      :
                      <>
                        <NavDropdown.Item onClick={() => navigate("/user/edit/" + getUser)}>
                          {console.log(getUser)}
                          Edit user
                        </NavDropdown.Item>
                        <NavDropdown.Divider />

                        <NavDropdown.Item onClick={() => setAUser("Guest")}>
                          Log out
                        </NavDropdown.Item>
                      </>}
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
