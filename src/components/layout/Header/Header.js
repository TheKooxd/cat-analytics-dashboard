import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">cat-analytics-dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Cat Search</NavItem>
          <NavItem eventKey={2} href="#">Leaderboards</NavItem>
          <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Report wrong data</MenuItem>
            <MenuItem eventKey={3.2}>Leave feedback</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
  )
  }
}
