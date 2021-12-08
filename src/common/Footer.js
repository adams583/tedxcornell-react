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
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTwitter, faFacebook, faInstagram);

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
          <Row className="justify-content-around" style={{ height: '18em' }}>
            <div className="col-sm-4 d-flex align-items-center">

              <Image style={{ width: '80%' }} src={logo} alt="Image not rendering" fluid></Image>
            </div>
            <div className="col-sm-5">
              <Container style={{ height: "100%" }}>
                <Row className="justify-content-around" style={{ height: "100%" }}>
                  <div className="col-4 d-flex align-items-center" >
                    <Stack gap={2} className=" my-auto">
                      <p><b>About Us</b></p>
                      <Stack gap={1} className=" my-auto">
                        <div>Our Story</div>
                        <div>Second item</div>
                        <div>Third item</div>
                      </Stack>
                    </Stack>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <Stack gap={2} className="my-auto">
                      <p><b>Our Events</b></p>
                      <Stack gap={1} className="my-auto">
                        <div>Main Event</div>
                        <div>TEDx Salons</div>
                        <div>FAQ</div>
                      </Stack>
                    </Stack>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <Stack gap={3} className="my-auto">
                      <Button variant="danger">Tickets</Button>
                      <Button variant="outline-danger">Contact Us</Button>

                    </Stack>
                  </div>
                </Row>
              </Container>
            </div>
          </Row>
          <Container style={{ width: '95%' }}>
            <Row className="justify-content-between bg-dark border-top py-4" >
              <div className="col-4 py-1 d-flex align-items-center  text-danger">
                <p className="pt-2">Ideas worth spreading</p>
              </div>
              <div id="socials" className="col-4  d-flex align-items-center justify-content-around">
                <span>Follow Us:</span>
                <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href="/" ><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                <a href="/" ><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}
export default Footer;
