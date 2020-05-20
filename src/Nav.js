import React from 'react';
import {Navbar, Button} from 'react-bootstrap';

function Nav() {
  return (
    <Navbar>
      <Navbar.Brand href="#">NRC Pace Chart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-primary">단위 변환</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;