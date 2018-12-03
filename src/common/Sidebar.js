import React, { Component } from "react";
import "./Sidebar.css";
import { Grid, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPath: "" };
  }

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <div class="sidenav container">
        {/* <div class="nav-logo" /> */}
        <div class="row nav-text-logo text-center">
          <strong>X</strong>
        </div>
        <div class="row nav-content text-center">
          <div class="row">
            <a href="/">Home</a>
          </div>
          <div class="row">
            <a href="/events">Events</a>
          </div>
          <div class="row">
            <a href="/team">Team</a>
          </div>
          <div class="row">
            <a href="/apply">Apply</a>
          </div>
        </div>
        <div class="row align-self-stretch nav-footer text-center">
          <a>
            <i class="fab fa-facebook fa-icon" />
          </a>
          &emsp;
          <a>
            <i class="fab fa-linkedin fa-icon" />
          </a>
          &emsp;
          <a>
            <i class="fab fa-instagram fa-icon" />
          </a>
          <br />
          tedx@cornell.edu
        </div>
      </div>
    );
  }
}

export default Sidebar;
