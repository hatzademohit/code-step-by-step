import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Login</Link>
            <Link to='/allpages' className='nav-link'>All Pages</Link>
            <Link to='/api' className='nav-link'>API</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;