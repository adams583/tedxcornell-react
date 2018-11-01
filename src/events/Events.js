import React, { Component } from "react";
import "./Events.css";
import { Row, Tab, Col, NavItem, Nav, Grid } from "react-bootstrap";

class Events extends Component {
  render() {
    return (
      <div>
        <Row className="main-panel-events ">
          <div class="text-center mx-auto">
            <h1>Events</h1>
            <p class="lead font-weight-normal">
              Upcoming: TEDxCornellUniversity 2019 | April 18, 2019
            </p>
          </div>
        </Row>
        <Row className="events-panel">
          <Tab.Container defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={4}>
                <Nav bsStyle="tabs" className="event-nav" stacked>
                  <NavItem eventKey="first">2019</NavItem>
                  <NavItem eventKey="second">2018</NavItem>
                  <NavItem eventKey="third">2015</NavItem>
                  <NavItem eventKey="fourth">Previous</NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">2019</Tab.Pane>
                  <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </div>
    );
  }
}

export default Events;
