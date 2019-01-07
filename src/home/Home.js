import React, { Component } from "react";
import "./Home.css";
import { Row, Col, Grid, Panel, Button } from "react-bootstrap";
import Card from "../common/Card";
import anime from "animejs";
import Paper from "@material-ui/core/Paper";

class Home extends Component {
  cards = [
    {
      title: "Events",
      text:
        "Speaker applications are open! We are looking for presenters who will inform, inspire, and entertain while spreading ideas that they are truly passionate about. Submit a topic or refer someone else. What are you waiting for?",
      buttonText: "Learn More"
    },
    {
      title: "Team",
      text:
        "The team's responsibilities involve selecting and inviting speakers and performers, designing event-specific materials, advertising, raising funds, establishing an online presence, and setting up everything that happens on the day of the event. We're still in need of team members to complete our 2019 team, so if you're interested, let us know and we'll be happy to talk with you!",
      buttonText: "Learn More"
    },
    {
      title: "Apply",
      text:
        "Our team was thrilled to host Cornell's fourth TEDx event this year on May 6th, 2018. We expanded on what TEDx has been at Cornell in previous years and shot for our biggest event yet, selling around 700 tickets! After this event's success, we plan on continuing TEDx as a yearly tradition at Cornell. ",
      buttonText: "Learn More"
    }
  ];

  render() {
    return (
      <div>
        <div class="main-panel-home-background ">
          <div class="main-panel-home-content text-center">
            <div>
              <strong>
                <h1 class="the-x">TEDxCornellUniversity</h1>
              </strong>
              {/* <p class="lead font-weight-normal">
                Speaker applications for our 2019 event are now open!
              </p> */}
              <a class="btn text-danger" href="/apply">
                Apply Now
              </a>
            </div>
            <i class="fa fa-angle-down fa-2x pulse" aria-hidden="true" />
          </div>
        </div>
        {/* <div data-aos="fade-down" className="first-panel mx-auto">
          <div class="mx-auto text-center">
            <h2 class="font-weight-normal text-center">About us</h2>
            <p class="lead font-weight-normal text-center">
              TEDx is a program of local and independently-organized TED-like
              events that bring people together to share amazing ideas. Cornell
              University's independent TEDx events are operated under official
              license from TED.
            </p>
          </div>
        </div> */}
        <div className="home-content">
          {/* <div className="section-title-container text-center">
            <h1 className="section-title">Ideas worth spreading</h1>
          </div> */}
          <Grid className="grid">
            <Row>
              <Col md={5}>
                <div>
                  <div data-aos="fade-right" className="paper-div">
                    <h3>About us</h3>
                    <p>
                      We're a student-run club dedicated to bringing great
                      events to Cornell. TEDx is a program of local and
                      independently-organized TED-like events that bring people
                      together to share amazing ideas. Operated under official
                      license from TED, Cornell University's independent TEDx
                      events hope to bring some of the brightest minds and best
                      ideas together to our campus.
                    </p>
                    <button className="standard-button">Learn More</button>
                  </div>
                </div>
              </Col>
              <Col md={7} />
            </Row>
            <div className="row-spacer" />
            <Row>
              <Col md={7} />
              <Col md={5}>
                <div>
                  <div data-aos="fade-left" className="paper-div">
                    <h3>Our plan</h3>
                    <p>
                      Each year we spend two semesters planning for a big event
                      in the spring. We believe our 2018 event was a success and
                      we hope to continue bringing great events to Cornell every
                      year. We're currently looking for speakers to present at
                      TEDxCornell 2019, so if you're interested or know someone
                      who might be, check out our speaker application page!
                    </p>
                    <button className="standard-button">Learn More</button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="row-spacer" />
            <Row>
              <Col md={5}>
                <div>
                  <div data-aos="fade-right" className="paper-div">
                    <h3>Our plan</h3>
                    <p>
                      Each year we spend two semesters planning for a big event
                      in the spring. We believe our 2018 event was a success and
                      we hope to continue bringing great events to Cornell every
                      year. We're currently looking for speakers to present at
                      TEDxCornell 2019, so if you're interested or know someone
                      who might be, check out our speaker application page!
                    </p>
                    <button className="standard-button">Learn More</button>
                  </div>
                </div>
              </Col>
              <Col md={7} />
            </Row>
            <div className="row-spacer" />
            <Row>
              <Col md={7} />
              <Col md={5}>
                <div>
                  <div data-aos="fade-left" className="paper-div">
                    <h3>Our community</h3>
                    <p>
                      As a relatively new group, we are always looking for
                      opportunities to expand and increase our presence on
                      campus. We've found that TEDx is a great way to meet
                      amazing people - on the team and at our events. Feel free
                      to reach out to us if you'd like to learn more!
                    </p>
                    <button className="standard-button">Learn More</button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="row-spacer" />
          </Grid>
        </div>
        {/* <Row className="second-panel">
          {this.cards.map(card => (
            <Col md={4}>
              <Card title={card.title} text={card.text}>
                <br />
                <br />
                <Button bsStyle={"danger"}>Learn More</Button>
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    );
  }
}

export default Home;
