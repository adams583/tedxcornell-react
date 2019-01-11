import React, { Component } from "react";
import "./Apply.css";
import { Grid, Row, Col, Panel, PanelGroup } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Collapsible from "../common/Collapsible";

class Apply extends Component {
  constructor(props) {
    super(props);
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
      question: "What's it like being on the organizing team?",
      answer:
        "It's pretty great! We have a close-knit, collaborative, and fun-loving team..."
    },
    {
      key: "3",
      question: "Are there other ways to get involved?",
      answer:
        "In March or April, we will be looking for volunteers willing to help with tasks leading up to the event and on the day of the event. If you'd like to meet the team and get a sense of what it's like being on the organizing side of the event, keep an eye out for our volunteering opportunities."
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
              <p>
                <b>Speaker applications are open!</b>
                <br />
                We are looking for presenters who will inform, inspire, and
                entertain while spreading ideas that they are truly passionate
                about. Submit a topic or refer someone else. What are you
                waiting for? Round 1 Applications close Wednesday, November 28
                at 11:59pm.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h3>Team Applications</h3>
              <p>
                <b>We are finished recruiting for Fall 2018.</b>
                <br />
                Check back in the spring if you're interested in joining our
                organizing team! We're a close-knit team of students who are
                passionate about TED and determined to organize a great 2019
                event.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>FAQ</h3>
              <PanelGroup accordion>
                {this.faq.map(qa => (
                  <Collapsible title={qa.question}>
                    <div>{qa.answer}</div>
                  </Collapsible>
                ))}
              </PanelGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Get in touch</h3>
              Feel free to send us an email at tedx@cornell.edu or find us on
              social media!
              <br />
              <br />
              <i class="fab fa-facebook fa-icon" />
              <i class="fab fa-linkedin fa-icon" />
              <i class="fab fa-instagram fa-icon" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Apply;
