import React, { Component } from "react";
import "./Footer.css";
import { Row, Col, Panel, Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer-panel">
        <Row>
          <Col md={6}>
            <h3>TEDxCornellUniversity</h3>
            <p>Thank you for stopping by!</p>
          </Col>
          <Col md={2}>
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="dark-a" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="dark-a" href="/events">
                  Events
                </a>
              </li>
              <li>
                <a className="dark-a" href="/team">
                  Team
                </a>
              </li>
              <li>
                <a className="dark-a" href="/apply">
                  Apply
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>TEDx</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="dark-a" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="dark-a" href="#">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="dark-a" href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Social</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="dark-a" href="#">
                  TED and TEDx
                </a>
              </li>
              <li>
                <a className="dark-a" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="dark-a" href="#">
                  License
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
