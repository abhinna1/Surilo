import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminNavbar(){
    return(

        <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/admin/dashboard">Surilo Admin</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/admin/artistpanel">Artists</Nav.Link>
          <Nav.Link href="/admin/albumpanel">Album</Nav.Link>
          <Nav.Link href="/admin/songpanel">Songs</Nav.Link>
          <Nav.Link href="/admin/users">Users</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
</>
    )
}
export default AdminNavbar;