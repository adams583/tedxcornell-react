import React, { Component } from "react";
import "./Apply.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";
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
      .then(function (response) {
        form.reset();
        console.log("Success!", response);
      })
      .catch(error => console.error("Error!", error.message));
  }

  applyCards = [
    {
      title: "Team Applications",
      subtitle: "Team Applications are currently closed",
      text: `Applications to join our team will be open again next Fall!
       Follow our instagram page @tedxcornell and join our mailing list
      to be informed when applications open!`,
      button: false
    },
    {
      title: "Volunteering Opportunities",
      subtitle: "Join our mailing list to hear about volunteering opportunities",
      text: "From tabling at our event to making sure everyone is where they are supposed to be, volunteers are an essential part of running a great event. Volunteering can also be a good way to get a sense for whether you'd be interested in joining the team."
    },
    {
      title: "Speaker Applications",
      subtitle: "Speaker applications for our Spring 2022 Event are now closed",
      text: "We are no longer accepting speaker applications for Spring 2022. If you would like to be a speaker, please come back and apply in the fall!",
      button: false,
      application: "https://forms.gle/EgPknDZjN1JfL4M48"
    },
  ]

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
        "Our organizers work on speaker curation, finance and sponsorship, design and marketing, website design, and more. "
    },
    {
      key: "3",
      question: "Are there other ways to get involved?",
      answer:
        "In the past we have looked for volunteers willing to help with tasks leading up to the event and on the day of the event. If you'd like to meet the team and get a sense of what it's like being on the organizing side of the event, this is a great option."
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
        <Container>
          <Row>
            <h2>Interested in being part of the organizing team?</h2>
          </Row>
          <Row>
            <h4>Our applications for this year are closed. The next recruiting cycle will be in Fall 2022. We'd love to hear from you!</h4>
          </Row>

          {this.applyCards.map((card, index) => (
            <Row>
              <Col md={9}>

                <h3>{card.title}</h3>
                <p className="left-border">
                  <b>{card.subtitle}</b>
                  <br />
                  {card.text}
                  {card.title == "Information Sessions" &&
                    <p>9/17 Information Session: <a>{card.link1}</a>
                      <br />
                      9/21 Information Session: <a>{card.link2}</a>
                    </p>
                  }


                  <div className="padding-top">
                    {card.title == "Speaker Applications"}
                  </div>
                </p>
                {card.button && <CustomButton color="#08b2e3" text="Apply Now" lightText href={card.application} />}
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
                    style={{ borderBottom: "2px solid gray" }}

                  />
                  <input
                    className="apply-page-form-button"
                    type="submit"
                    value="Sign up"
                    style={{ backgroundColor: "#08B2E3", color: "whitesmoke" }}
                  />
                </form>
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>More Information</h3>
              <Accordion accordion id="panelGroup">
                {this.faq.map((qa, index) => (
                  <Collapsible key={index} title={qa.question}>
                    <div>{qa.answer}</div>
                  </Collapsible>
                ))}
              </Accordion>
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
              <div className="social-links-container">
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

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Apply;
