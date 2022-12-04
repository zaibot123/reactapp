import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import SearchButton from './searchwithbutton.jsx';

function NavBar(){

return(
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    <Navbar bg="dark" variant="dark">
        <Container style={{width: 100}}>
           <Navbar.Brand href="/">
           <img
              src="https://forskning.ruc.dk/files-asset/80534321/mir_small.jpg?w=160&f=webp"
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="Morten"
            />
           </Navbar.Brand>
           </Container>
        <Container>
        <SearchButton/>        
        </Container>
        <Nav className="d-inline-block align-center">
        <Container>
        <Nav.Link href="login">Login</Nav.Link>
        </Container>
        </Nav>
      </Navbar>

      </>
)

}
export default NavBar