import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
          <Nav className="me-auto navbar-warapper">
            {
              localStorage.getItem('user-info') ?
              <>
                <Link to="/add">Add Products</Link>
                <Link to="/update">Update Products</Link>
              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            }
            
          </Nav>
      </Navbar>
    </div>
  )
}

export default Header;