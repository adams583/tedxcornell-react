import React, { Component } from "react";
import "./Footer.css";
import { Row, Col, Panel, Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer-panel flex-vertical">
        <div className="footer-content-container">
          <div className="footer-left flex-vertical">
            <div className="logo-container">
              <h1>TEDxCornellUniversity</h1>
            </div>
            <div className="links-container ">
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <a href="/">Home</a>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <a href="/about">About</a>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <a href="/events">Events</a>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <a href="/apply">Apply</a>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <a href="/faq">FAQ</a>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <a href="/apply">Contact</a>
              </Col>
            </div>
          </div>
          <div className="footer-right flex-vertical">
            <div className="large-text">Join Our Mailing List</div>
            <div>
              <p>
                Sign up for event details and opportunities to volunteer, join
                the team, or speak at our event.
              </p>
            </div>
            <div className="sign-up-container">
              <form action="">
                <input type="text" placeholder="Enter your email" />
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
        <div className="icons-container">
          <a href="https://www.facebook.com/TEDxCornellUniversity/">
            <i class="fab fa-facebook fa-icon" />
          </a>
          <a href="https://www.instagram.com/tedxcornelluniversity/">
            <i class="fab fa-instagram fa-icon" />
          </a>
          <a href="https://www.linkedin.com/company/tedxcornell/about/">
            <i class="fab fa-linkedin fa-icon" />
          </a>
        </div>
        <div className="hr-div" />
      </div>
    );
  }
}

export default Footer;
