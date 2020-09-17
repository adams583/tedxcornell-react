import React, { Component } from "react";
import "./Apply.css";
import { Grid, Row, Col, PanelGroup } from "react-bootstrap";
import Collapsible from "../common/collapsible/Collapsible";
import CustomButton from "../common/buttons/CustomButton";

class Apply extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec";
    e.preventDefault();
    const form = document.forms["apply-submit-to-google-sheet"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function(response) {
        form.reset();
        console.log("Success!", response);
      })
      .catch(error => console.error("Error!", error.message));
  }

  applyCards = [
    {
      title: "Team Applications", 
      subtitle: "We are looking for new members!", 
      text: "Applications are open for all positions! Attend one of our info sessions to learn more, or click the button below to fill out our interest form. We're a close-knit team of students who are passionate about TED and determined to organize great events. You can also catch us at clubfest!"
    },
    {
      title: "Information Sessions",
      subtitle: "We are having information sessions on 9/17 and 9/21.",
      text: "Our information sessions are Thursday, 9/17, at 6:00 PM and  Monday 9/21, at 5:30 PM. Refer below for Zoom links.",
      link1: "https://us0gitpu2web.zoom.us/j/87996752238?pwd=bXBQY2ZWK2ppV1h5S3NaU2pVd28zZz09",
      link2: "Check back soon for this link."
    },
    {
      title: "Volunteering Opportunities", 
      subtitle: "Join our mailing list to hear about volunteering opportunities", 
      text: "From tabling at our event to making sure everyone is where they are supposed to be, volunteers are an essential part of running a great event. Volunteering can also be a good way to get a sense for whether you'd be interested in joining the team."
    },
    {
    title: "Speaker Applications", 
    subtitle: "Speaker applications are current closed.", 
    text: "Check back later this fall for more details on speaker applications. We look for presenters who will inform, inspire, and entertain while spreading ideas that they are truly passionate about. If you are interested, or know someone who might be, please check back in fall 2021 for applications."
    },
  ]

  faq = [
    {
      key: "1",
      question: "Can anyone apply to be a speaker?",
      answer:
        "NOTE: Applications for the 2020 event are now closed. Check back next fall for the 2021 event." +
        "Yes! We're looking for individuals who believe that they have a story, idea, or passion worth sharing."
    },
    {
      key: "2",
      question: "What roles are available on the organizing team?",
      answer:
        "Our organizers work on speaker curation, finance and sponsorship, design and marketing, website design, and more. " 
    },
    {
      key: "3",
      question: "Are there other ways to get involved?",
      answer:
        "We will be looking for volunteers willing to help with tasks leading up to the event and on the day of the event. If you'd like to meet the team and get a sense of what it's like being on the organizing side of the event, keep an eye out for our volunteering opportunities."
    },
    {
      key: "4",
      question: "Do you compensate speakers?",
      answer: "TEDx events are not allowed to pay speakers; however, we can cover travel and lodging for speakers outside of Ithaca. We do our best to provide all the support we can to our speakers."
    }
  ];

  render() {
    return (
      <div className="apply-div">
        <Grid>
        <Row>
          <h2>Interested in getting involved?</h2>
        </Row>

        {this.applyCards.map((card, index) => (
          <Row>
            <Col md={8}>

              <h3>{card.title}</h3>
              <p className="left-border">
                <b>{card.subtitle}</b>
                <br/>
                {card.text}
                {card.title == "Information Sessions" && 
                <p>9/17 Information Session: {card.link1}
                  <br/>
                  9/21 Information Session: {card.link2}
                </p>
                }
                

                <div className="padding-top">
                  {card.title == "Team Applications" && 
                    <CustomButton
                    text="Stay Connected" 
                    color="#e62b1e"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdP084WxqeC-m5bOeZ7jtq6ibmx0J0ikSUCXDehjYoemQt87g/viewform?usp=sf_link"
                  />}
                </div>
              </p>
            </Col>
          </Row> 
          ))}

          <Row>
            <Col md={4}>
              <div>
                <h3>Join our mailing list</h3>

                <form
                  onSubmit={this.handleSubmit}
                  name="apply-submit-to-google-sheet"
                  className="apply-page-form"
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  <input
                    className="apply-page-form-button"
                    type="submit"
                    value="Sign up"
                    style={{ backgroundColor: "#e62b1e" }}
                  />
                </form>
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>More Information</h3>
              <PanelGroup accordion id="panelGroup">
                {this.faq.map((qa, index) => (
                  <Collapsible key={index} title={qa.question}>
                    <div>{qa.answer}</div>
                  </Collapsible>
                ))}
              </PanelGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Get in touch</h3>
              <p>
                Feel free to send us an email at
                <strong> tedx@cornell.edu </strong>
                or find us on social media!
              </p>
              <br />
              <a href="https://www.facebook.com/TEDxCornellUniversity/">
                <i className="fab fa-facebook fa-icon" />
              </a>
              <a href="https://www.instagram.com/tedxcornelluniversity/">
                <i className="fab fa-instagram fa-icon" />
              </a>
              <a href="https://www.linkedin.com/company/tedxcornell/about/">
                <i className="fab fa-linkedin fa-icon" />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Apply;
