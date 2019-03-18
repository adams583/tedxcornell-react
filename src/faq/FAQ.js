import React, { Component } from "react";
import "./FAQ.css";
import { PanelGroup } from "react-bootstrap";
import Collapsible from "../common/Collapsible.js";
import CardSelector from "./CardSelector";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "general"
    };
  }

  generalFaq = [
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
    },
    {
      key: "4",
      question: "How much do tickets cost for the upcoming event?",
      answer: ""
    },
    {
      key: "5",
      question: "How can I register for your event?",
      answer: ""
    },
    {
      key: "6",
      question: "Do your events have themes?",
      answer: ""
    }
  ];

  tedFaq = [
    {
      key: "1",
      question: "What is TED?",
      answer:
        "TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues."
    },
    {
      key: "2",
      question: "What is TEDx?",
      answer:
        "A TEDx event is a local gathering where live TED-like talks and videos previously recorded at TED conferences are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. "
    },
    {
      key: "3",
      question: "Who runs TEDxCornellUniversity",
      answer:
        "Operating under official license from TED, a group of student volunteers organize and host each TEDxCornellUniversity event."
    },
    {
      key: "4",
      question: "What can I expect at a TEDx event?",
      answer: ""
    },
    {
      key: "5",
      question:
        "How many TEDxCornellUniversity conferences have been held so far?",
      answer:
        "Our 2019 event will be our fourth event. At Cornell in the past, TEDx events have not been a big part of the culture, but we're trying our best to change that!"
    },
    {
      key: "6",
      question: "How are TEDx events sponsored?",
      answer:
        "We are a nonprofit organization sponsored by donations from companies, local businesses, and organizations within Cornell University."
    }
  ];

  toggleFaq = e => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="faq">
        <div>
          <h4>Learn more about us and our event</h4>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-content">
          <div className="faq-selector-container">
            <div
              className="faq-selector"
              onClick={() => {
                this.setState({ category: "general" });
              }}
            >
              <CardSelector
                title="Team and event inquiries"
                text="Our 2019 event is quickly approaching! Learn more about how the team operates and what our events are all about"
                data-faq="general"
                selected={this.state.category === "general"}
              />
            </div>
            <div
              className="faq-selector"
              onClick={() => {
                this.setState({ category: "ted" });
              }}
            >
              <CardSelector
                title="About TED and TEDx"
                text="We operate under an official TED license to organize an independent event. Learn more about TED and TEDx here."
                data-faq="ted"
                selected={this.state.category === "ted"}
              />
            </div>

            <div className="other-card large-screen-only">
              <h5>Anything else?</h5>
              <p>
                Feel free to email us anytime with any other questions at &nbsp;
                <span className="text-red">tedx@cornell.edu</span>
              </p>
            </div>
          </div>

          {this.state.category === "general" && (
            <PanelGroup
              accordion
              className="faq-questions-container"
              data-faq="general"
              id="faq-panel-group"
            >
              {this.generalFaq.map((qa, index) => (
                <Collapsible key={index} title={qa.question}>
                  <div>{qa.answer}</div>
                </Collapsible>
              ))}
            </PanelGroup>
          )}

          {this.state.category === "ted" && (
            <PanelGroup
              accordion
              className="faq-questions-container"
              data-faq="ted"
              id="faq-panel-group"
            >
              {this.tedFaq.map((qa, index) => (
                <Collapsible key={index} title={qa.question}>
                  <div>{qa.answer}</div>
                </Collapsible>
              ))}
            </PanelGroup>
          )}
        </div>
      </div>
    );
  }
}

export default FAQ;
