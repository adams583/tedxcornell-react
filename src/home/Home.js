import React, { Component } from "react";
import "./Home.css";
import { Row, Col, Grid } from "react-bootstrap";

import ImageTextOverlap from "../common/ImageTextOverlap";
import itoImg from "../img/itai1.jpg";
import BottomPanel from "../common/BottomPanel";
import faqimg from "../img/yamatai.jpg";
import tipImg2 from "../img/jessenitai2.jpg";
import tipImg1 from "../img/jessencolin.jpg";
import TwoImgPanel from "../common/TwoImgPanel";
import SplitPanel from "../common/SplitPanel";
import CustomButton from "../common/CustomButton";

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
        <div className="main-panel-home-background ">
          <div className="main-panel-home-content text-center">
            {/* <div>
              <strong>
                <h1 className="the-x">TEDxCornellUniversity</h1>
              </strong> */}
            {/* <p className="lead font-weight-normal">
                Speaker applications for our 2019 event are now open!
              </p> */}
            <div className="home-event-details">
              <p>Statler Auditorium | 4.28.2019 | 2:30pm</p>
            </div>
            <div className="offset-for-bg">
              <a
                className="cool-btn btn text-danger"
                href="https://cornellconcerts.universitytickets.com/"
              >
                <b>Buy Tickets</b>
              </a>
            </div>

            {/* </div> */}
            {/* <i className="fa fa-angle-down fa-2x pulse" aria-hidden="true" /> */}
          </div>
        </div>
        <div id="about-home-panel">
          <h2>
            <em>“There are no facts, only interpretations.”</em> &nbsp;-
            Friedrich Nietzsche
          </h2>
          <p>
            The political and technological turmoil of the past few years has
            had unexpected consequences: it’s causing us to ask bigger, deeper,
            more challenging questions. Like … where is this heading? what
            really matters? is there more I should be doing?
          </p>
          <p>
            At TEDxCornellUniversity 2019, we will be trying to answer these
            questions and exploring ideas that inspire and urge us to think more
            deeply about ourselves, our communities, and the future that lies
            ahead of us.
          </p>
        </div>

        <TwoImgPanel imgLeft={tipImg1} imgRight={tipImg2} />

        {/* <div data-aos="fade-down" className="first-panel mx-auto">
          <div className="mx-auto text-center">
            <h2 className="font-weight-normal text-center">About us</h2>
            <p className="lead font-weight-normal text-center">
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
          <ImageTextOverlap
            onImgLoad={() => {}}
            src={itoImg}
            title="What is TEDxCornellUniversity?"
            content="We're a student-run club dedicated to bringing great independently-organized TED events and amazing people to Cornell."
            button="Learn More"
            buttonHref="/about"
          />

          <Grid className="grid">
            <Row>
              <Col md={5}>
                <div>
                  <div data-aos="fade-right" className="paper-div">
                    <h3>Our Plan</h3>
                    <p>
                      Each year we spend two semesters planning for a big event
                      in the spring. We believe our 2018 event was a big success
                      and we hope to continue bringing great events to Cornell
                      every year.
                    </p>
                    <CustomButton
                      text="Our Events"
                      color="#e62b1e"
                      href="/events"
                    />
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
                    <h3>Get Involved</h3>
                    <p>
                      Interested in getting involved on the speaking or
                      organizing side? We're currently looking for speakers to
                      present at TEDxCornell 2019 and students passionate about
                      spreading knowledge and meeting amazing people.
                    </p>
                    <CustomButton
                      text="Apply Now"
                      color="#e62b1e"
                      href="/apply"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="row-spacer" />
            {/* <Row>
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
            </Row> */}
            {/* <div className="row-spacer" /> */}
          </Grid>

          <BottomPanel
            img={faqimg}
            title="Any Questions?"
            txt="Have any questions? Visit our FAQs page or get in touch with us to ask about anything. We'd love to hear from you"
            button="See FAQs"
            buttonHref="/faq"
          />
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
