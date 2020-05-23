import React from 'react';
import {Navbar, Button} from 'react-bootstrap';

function Nav(props) {
  return (
    <Navbar>
      <Navbar.Brand href="#">NRC Pace Chart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-success" onClick={props.changeMetric}>단위 변환</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;