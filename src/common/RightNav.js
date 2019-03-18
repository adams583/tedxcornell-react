import React, { Component } from "react";
import "./RightNav.css";

class RightNav extends Component {
  render() {
    return (
      <div className="rightnav-wrapper container-fluid">
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/events">Events</a>
        </div>
        {/* <div>
          <a href="/speakers">Speakers</a>
        </div> */}

        <div>
          <a href="/apply">Apply</a>
        </div>
        <div>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    );
  }
}

export default RightNav;
