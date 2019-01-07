import React, { Component } from "react";
import "./RightNav.css";
import { Grid, Row } from "react-bootstrap";

class RightNav extends Component {
  render() {
    return (
      <div className="rightnav-wrapper container-fluid">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/events">Events</a>
        </div>
        <div>
          <a href="/speakers">Speakers</a>
        </div>
        <div>
          <a href="/team">Team</a>
        </div>

        <div>
          <a href="/apply">Apply</a>
        </div>
      </div>
    );
  }
}

export default RightNav;
