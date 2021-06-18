/* eslint-disable */
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export function NavBar() {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>SN</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Info</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Sign Up</Nav.Link>
            <Nav.Link href='#link'>Login</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
