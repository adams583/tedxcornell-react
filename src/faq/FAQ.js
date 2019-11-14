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
      question: "Can I help organize the event?",
      answer:
        'Our team is fully staffed this semester, but check back next semester! Look out for voluteer opporutnites as another way to get involved.'
    },
    {
      key: "2",
      question: "When is the event?",
      answer:
        "TEDxCornell 2020 will be held on Saturday April 25th, 2020 in Statler Auditorium."
    },
    {
      key: "3",
      question: "Who sponsors your event?",
      answer:
        "Our sponsors include different schools of Cornell, local businesses, and larger companies as well."
    },
    {
      key: "4",
      question: "What can I get out of coming to a TEDx event?",
      answer:
        "You can learn, be inspired, and get a chance to engage with a community interested in discussing exciting new ideas. "
    },
    {
      key: "5",
      question: "Can anyone come to the event?",
      answer:
        "Yes! If you're going to be in town on April 25th, you're welcome at our event."
    },
    {
      key: "6",
      question: "How can I register for your event?",
      answer:
        "Just buy tickets! Navigate to our home page and use our ticketing link to purchase tickets. If you have trouble doing so, shoot us an email and we'll help out."
    },
    {
      key: "7",
      question: "Do your events have themes?",
      answer:
        'Our 2019 event\'s theme was "Reframe". While some of our previous events were not themed, we plan on having themes from here on out.'
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
      question: "Who runs TEDxCornell",
      answer:
        "Operating under official license from TED, a group of student volunteers organize and host each TEDxCornell event."
    },
    {
      key: "4",
      question: "What can I expect at a TEDx event?",
      answer:
        "TEDx events are truly unique in that they bring together a diverse range of speakers and ideas together in one place in the span of a few hours. There's no platform quite like it."
    },
    {
      key: "5",
      question:
        "How many TEDxCornell conferences have been held so far?",
      answer:
        "Our 2019 event was our fourth event. At Cornell in the past, TEDx events have not been a big part of the culture, but we're trying our best to change that!"
    },
    {
      key: "6",
      question: "How are TEDx events sponsored?",
      answer:
        "We are a nonprofit organization sponsored by donations from companies, local businesses, and organizations within Cornell University."
    }
  ];

  speakerFaq = [
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
        "Our organizers work on speaker curation, finance and sponsorship, design and marketing, website design, and more. " + 
        "Check back next semester to see what positions we're looking for."
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
                text="Our 2020 event is coming soon! Learn more about how the team operates and what our events are all about"
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
            <div
              className="faq-selector"
              onClick={() => {
                this.setState({ category: "speaker" });
              }}
            >
              <CardSelector
                title="Speaking inquiries"
                text="Want to speak or get involved? Here are some common questions."
                data-faq="speaker"
                selected={this.state.category === "speaker"}
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

          {this.state.category === "speaker" && (
            <PanelGroup
              accordion
              className="faq-questions-container"
              data-faq="speaker"
              id="faq-panel-group"
            >
              {this.speakerFaq.map((qa, index) => (
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
