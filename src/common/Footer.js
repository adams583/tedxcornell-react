import React, { Component } from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import logo from "../img/HomeLogo.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faLinkedin, faFacebook, faInstagram);

class Footer extends Component {

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


  render() {
    return (
      <div id="footer">
        <Container className="bg-dark text-white" fluid>
          <Row className="justify-content-around py-5" >
            <div className="col-sm-4 d-flex align-items-center">

              <Image style={{ width: '80%' }} src={logo} alt="Image not rendering" fluid></Image>
            </div>
            <div className="col-sm-7">
              <Container style={{ height: "100%" }}>
                <Row className="justify-content-around" style={{ height: "100%" }}>
                  <div className="col-md-3 d-flex align-items-center" >
                    <Stack gap={2} className=" my-auto">
                      <p><b>About Us</b></p>
                      <Stack gap={1} className=" my-auto">
                        <div><a href="/team">Our Story</a></div>
                      </Stack>
                    </Stack>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <Stack gap={2} className="my-auto">
                      <p><b>Our Events</b></p>
                      <Stack gap={1} className="my-auto">
                        <div><a href="/events">Main Event</a></div>
                        <div><a href="/">TEDx Salons</a></div>
                        <div><a href="faq">FAQ</a></div>
                      </Stack>
                    </Stack>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <Stack className="my-auto">
                      <h3>Join Our Mailing List</h3>
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
                          <Button variant="danger" onClick={this.handleSubmit}>Sign Up</Button>
                        </form>
                      </div>
                    </Stack>
                  </div>
                </Row>
              </Container>
            </div>
          </Row>
          <Container className="py-3"style={{ width: '95%' }}>
            <Row className="justify-content-between bg-dark border-top py-4" >
              <div className="col-4 py-1 d-flex align-items-center  text-danger">
                <p className="pt-2">Ideas worth spreading</p>
              </div>
              <div id="socials" className="col-4  d-flex align-items-center justify-content-around">
                <span>Follow Us:</span>
                <a target="_blank" href="https://www.linkedin.com/company/tedxcornell/about/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a target="_blank" href="https://www.facebook.com/TEDxCornellUniversity/" ><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                <a target="_blank" href="https://www.instagram.com/tedxcornell/" ><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}
export default Footer;
