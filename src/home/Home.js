import React, { Component } from "react";
import "./Home.css";
import { Row, Col, Grid, Panel, Button } from "react-bootstrap";
import Card from "../common/Card";

class Home extends Component {
  cards = [
    {
      title: "Events",
      text:
        "Speaker applications are open! We are looking for presenters who will inform, inspire, and entertain while spreading ideas that they are truly passionate about. Submit a topic or refer someone else. What are you waiting for?"
    },
    {
      title: "Team",
      text:
        "The team's responsibilities involve selecting and inviting speakers and performers, designing event-specific materials, advertising, raising funds, establishing an online presence, and setting up everything that happens on the day of the event. We're still in need of team members to complete our 2019 team, so if you're interested, let us know and we'll be happy to talk with you!"
    },
    {
      title: "Apply",
      text:
        "Our team was thrilled to host Cornell's fourth TEDx event this year on May 6th, 2018. We expanded on what TEDx has been at Cornell in previous years and shot for our biggest event yet, selling around 700 tickets! After this event's success, we plan on continuing TEDx as a yearly tradition at Cornell. "
    }
  ];

  render() {
    return (
      <div>
        <Row className="main-panel-home ">
          <div class="text-center mx-auto">
            <h1>TEDxCornellUniversity</h1>
            <p class="lead font-weight-normal">
              Speaker applications for our 2019 event are now open!
            </p>
            <a class="btn text-danger">Apply Now</a>
          </div>
        </Row>
        <Row className="first-panel mx-auto">
          <div class="mx-auto text-center">
            <h2 class="font-weight-normal text-center">About us</h2>
            <p class="lead font-weight-normal text-center">
              TEDx is a program of local and independently-organized TED-like
              events that bring people together to share amazing ideas. Cornell
              University's independent TEDx event was operated under license
              from TED.
            </p>
          </div>
        </Row>
        <Row className="second-panel">
          {this.cards.map(card => (
            <Col md={4}>
              <Card title={card.title} text={card.text}>
                <br />
                <br />
                <Button bsStyle={"danger"}>Learn More</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Home;
