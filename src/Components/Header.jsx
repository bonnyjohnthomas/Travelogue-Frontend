import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar id='nav' >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              
              src="https://png.monster/wp-content/uploads/2022/03/png.monster-1005.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-1"
            />{' '}
            My Travels
          </Navbar.Brand>
        </Container>

            

      </Navbar>

    </div>
  )
}

export default Header