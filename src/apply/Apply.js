import React, { Component } from "react";
import "./Apply.css";
import ImageTextOverlay from "../common/ImageTextOverlay";
import header_img from "../img/cornellpic2.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophoneAlt, faVoteYea, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMicrophoneAlt, faVoteYea, faEnvelope)

const applyCards = [
  {
    fa: 'microphone-alt',
    header: 'Apply To Be Speaker',
    info: `Do you have an idea worth spreading? The TEDxCornell stage is the 
    perfect place to share it! Apply today to potentially get selected as a 
    speaker for our next event!`,
    button: 'Apply Now!'
  },
  {
    fa: 'vote-yea',
    header: 'Nominate A Speaker',
    info: `Is there someone you think would make a fantastic speaker at an event?
    Nominate them! `,
    button: 'Contact Us'

  },
  {
    fa: 'envelope',
    header: 'Join Our Mailing List',
    info: `Join our mailing list to keep up to date with all the latest 
    TEDxCornell news, such as the speaker line up, our next event date, 
    and all of the other exciting things we do throughout the year! `,
    button: 'Join Now!'

  }
]


class Apply extends Component {
  handleSubmit(e) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec";
    e.preventDefault();
    const form = document.forms["apply-submit-to-google-sheet"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function (response) {
        form.reset();
        console.log("Success!", response);
      })
      .catch(error => console.error("Error!", error.message));
  }


  render() {
    return (
      <div>
        <ImageTextOverlay
          title="Apply"
          body="Interested in working with TEDxCornell?"
          img={header_img}
        >
        </ImageTextOverlay>
        <Container className="my-3" style={{ fontFamily: "Montserrat", fontSize: "24px", lineHeight: '36px' }}>
          <Row className="pt-4 px-3">
            <Col className="col-md-8">
              We're always looking for new voices and new ideas to add
              to the TED community. Through our TEDxCornell main event
              and newly introduced salon series, we take those great ideas
              and help them grow — but they start with your suggestions.
            </Col>
          </Row>
          <Row className="mt-3 px-3" style={{ color: "red" }}>
            <b>See all the ways to get involved and let us know about
              the most exciting, talented people in your network.</b>
          </Row>
          <Container className="py-3">
            <Row className="justify-content-evenly">
              {
                applyCards.map(card =>
                  <Col md={5} className="py-3">
                    <Card className="apply-card text-center py-3 px-4 h-100">
                      <Card.Body>
                        <FontAwesomeIcon style={{ fontSize: '45px', color: 'red' }} icon={['fas', card.fa]}></FontAwesomeIcon>
                        <div className="pt-4">
                          <h4><b>{card.header}</b></h4>
                          <p className="py-3">{card.info}</p>
                          {card.button && <Button variant="outline-danger">{card.button}</Button>}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Container>
      </div >
    );
  }
}

export default Apply;
