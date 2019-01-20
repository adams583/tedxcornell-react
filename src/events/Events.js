import React, { Component } from "react";
import "./Events.css";
import { Row, Tab, Col, NavItem, Nav, Grid } from "react-bootstrap";
import GenericPanel from "../common/GenericPanel";

class Events extends Component {
  render() {
    return (
      <div>
        <div className="main-panel-events ">
          <div class="text-center mx-auto">
            <h1>Events</h1>

            <p class="lead font-weight-normal">
              Upcoming: TEDxCornellUniversity 2019 | April 18, 2019
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
