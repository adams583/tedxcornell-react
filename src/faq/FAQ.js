import React, { Component } from "react";
import "./FAQ.css";
import { PanelGroup } from "react-bootstrap";
import Collapsible from "../common/Collapsible.js";

class FAQ extends Component {
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
      <div className="faq">
        <h3>FAQ</h3>
        <PanelGroup accordion>
          {this.faq.map(qa => (
            <Collapsible title={qa.question}>
              <div>{qa.answer}</div>
            </Collapsible>
          ))}
        </PanelGroup>
      </div>
    );
  }
}

export default FAQ;
