import React, { Component } from "react";
import "./Apply.css";
import { Grid, Row, Col, PanelGroup } from "react-bootstrap";
import Collapsible from "../common/Collapsible";
import CustomButton from "../common/CustomButton";

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

  faq = [
    {
      key: "1",
      question: "Can anyone apply to be a speaker?",
      answer:
        "Yes! We're looking for individuals who believe that they have a story, idea, or passion worth sharing."
    },
    {
      key: "2",
      question: "What roles are available on the organizing team?",
      answer:
        "Our organizers work on speaker curation, finance and sponsorship, design and marketing, website design, and more. This year we are prioritizing finance, marketing, and website design roles, but if you're interested in another role, we encourange you to submit an application anyways!"
    },
    {
      key: "3",
      question: "Are there other ways to get involved?",
      answer:
        "We will be looking for volunteers willing to help with tasks leading up to the event and on the day of the event. If you'd like to meet the team and get a sense of what it's like being on the organizing side of the event, keep an eye out for our volunteering opportunities."
    }
  ];

  render() {
    return (
      <div className="apply-div">
        <Grid>
          <Row>
            <h2>Interested in getting involved?</h2>
          </Row>
          <Row>
            <Col md={8}>
              <h3>Speaker Applications</h3>
              <p className="left-border">
                <b>Speaker applications for our 2020 event are coming soon.</b>
                <br />
                We look for presenters who will inform, inspire, and entertain
                while spreading ideas that they are truly passionate about. If
                you are interested, or know someone who might be, get in touch
                or keep an eye out for applications. Applications for our 2020
                event will be posted in Fall 2019.
              </p>
              {/* <CustomButton text="Apply Now" color="#e62b1e" /> */}
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h3>Team Applications</h3>
              <p className="left-border">
                <b>We are recruiting!</b>
                <br />
                Apply now if you're interested in joining our organizing team!
                We're a close-knit team of students who are passionate about TED
                and determined to organize great events.
                <div className="padding-top">
                  <CustomButton
                    text="Apply Now"
                    color="#e62b1e"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfdvefoTzOe37qstAXd1I_ECZ6zEBG9NKAaA1QeD5_rsIzD7g/viewform?usp=sf_link"
                  />
                </div>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h3>Volunteering Opportunities</h3>
              <p className="left-border">
                <b>
                  Join our mailing list to hear about volunteer opportunities.
                </b>
                <br />
                From tabling at our event to making sure everyone is where they
                are supposed to be, volunteers are an essential part of running
                a great event. Volunteering can also be a good way to get a
                sense for whether you'd be interested in joining the team.
              </p>
            </Col>
          </Row>
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
