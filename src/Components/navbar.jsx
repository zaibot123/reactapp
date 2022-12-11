import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function NavBar(){
   return (

         <>
           {['md'].map((expand) => (
             <Navbar key={expand} bg="light" expand={expand} className="mb-3">
               <Container fluid>
               <Navbar.Brand href="#"> <img
             src="https://forskning.ruc.dk/files-asset/80534321/mir_small.jpg?w=160&f=webp"
             width="50"
             height="50"
             className="d-inline-block align-center"
             alt="Morten"  
           /></Navbar.Brand>
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
                       />
                       <Button variant="outline-success">Search</Button>
                     </Form>
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                       <Nav.Link href="#action1">Home</Nav.Link>
                       <Nav.Link href="#action2">Link</Nav.Link>
                       <NavDropdown
                         title="Dropdown"
                         id={`offcanvasNavbarDropdown-expand-${expand}`}
                       >
                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action4">
                           Another action
                         </NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action5">
                           Something else here
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
