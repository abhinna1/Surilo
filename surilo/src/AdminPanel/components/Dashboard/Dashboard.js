import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard(){
    return(
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/admin/dashboard">Surilo Admin</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/admin/artistpanel">Artists</Nav.Link>
          <Nav.Link href="#features">Songs</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
</>
    )
}

export default Dashboard;