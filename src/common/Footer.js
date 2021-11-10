import React, { Component } from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec";
    e.preventDefault();
    const form = document.forms["footer-submit-to-google-sheet"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function (response) {
        form.reset();
        console.log("Success!", response);
      })
      .catch(error => console.error("Error!", error.message));
  }

  test() {
    return (
      <footer>
        <Container>
        <Row>

        </Row>
        </Container>
      </footer>
    )
  }

  render() {
    return (
      <div className="footer-panel flex-vertical">
        <div className="footer-content-container">
          <div className="footer-left flex-vertical">
            <div className="logo-container">
              <h1><strong className="text-red">TEDx</strong>Cornell</h1>
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
                <a href="/sponsors">Sponsors</a>
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
              <form
                onSubmit={this.handleSubmit}
                name="footer-submit-to-google-sheet"
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
        <div className="icons-container">
          <a href="https://www.facebook.com/TEDxCornellUniversity/">
            <i className="fab fa-facebook fa-icon" />
          </a>
          <a href="https://www.instagram.com/tedxcornelluniversity/">
            <i className="fab fa-instagram fa-icon" />
          </a>
          <a href="https://www.linkedin.com/company/tedxcornell/about/">
            <i className="fab fa-linkedin fa-icon" />
          </a>
        </div>
        <div className="hr-div" />
      </div>
    );
  }
}

export default Footer;
