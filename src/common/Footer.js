import React, { Component } from "react";
import "./Footer.css";
import { Row, Col, Panel, Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <h3>Contact</h3>
            <p className="text-muted">We'd love to hear from you!</p>
          </Col>
          <Col md={3}>
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Apply
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>TEDx</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  TED and TEDx
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  License
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Footer;
