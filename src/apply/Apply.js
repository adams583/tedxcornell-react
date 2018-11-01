import React, { Component } from "react";
import "./Apply.css";
import { Grid, Row, Col, Panel, PanelGroup } from "react-bootstrap";

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
      <Grid>
        <Row>
          <h2>Interested in getting involved?</h2>
        </Row>
        <Row>
          <h3>Speaker Applications</h3>
          <p>
            <b>Speaker applications are open!</b>
            <br />
            We are looking for presenters who will inform, inspire, and
            entertain while spreading ideas that they are truly passionate
            about. Submit a topic or refer someone else. What are you waiting
            for? Round 1 Applications close Wednesday, November 28 at 11:59pm.
          </p>
        </Row>
        <Row>
          <h3>Team Applications</h3>
          <p>
            <b>We are finished recruiting for Fall 2018.</b>
            <br />
            Check back in the spring if you're interested in joining our
            organizing team! We're a close-knit team of students who are
            passionate about TED and determined to organize a great 2019 event.
          </p>
        </Row>
        <Row>
          <h3>FAQ</h3>
          <PanelGroup accordion>
            {this.faq.map(qa => (
              <Panel key={qa.key} eventKey={qa.key}>
                <Panel.Heading>
                  <Panel.Title toggle>{qa.question}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>{qa.answer}</Panel.Body>
              </Panel>
            ))}
          </PanelGroup>
          ;
        </Row>
      </Grid>
    );
  }
}

export default Apply;
