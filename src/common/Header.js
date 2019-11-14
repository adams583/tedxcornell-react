import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect className="main-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">TEDxCornell</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/events">
              Events
            </NavItem>
            <NavItem eventKey={2} href="/team">
              Team
            </NavItem>
            <NavItem eventKey={3} href="/apply">
              Apply
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
