import React from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
          <Nav className="me-auto navbar-warapper">
            {
              localStorage.getItem('user-info') ?
              <>
                <Link to="/">Product List</Link>
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
          {localStorage.getItem('user-info') ? 
            <Nav>
              <NavDropdown title= { user && user.name }>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :
            null
          }
      </Navbar>
    </div>
  )
}

export default Header;