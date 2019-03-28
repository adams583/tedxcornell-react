import React, { Component } from "react";
import "./Events.css";
import Profile from "../common/profile/Profile";
import SplitPanel from "../common/SplitPanel";
import eventsbg2 from "../img/events_bg1.jpg";
import eventsbg1 from "../img/jessenitai2.jpg";
import { speakers_2019 } from "../speakers/speaker-profiles";
import { Col } from "react-bootstrap";
import BottomPanel from "../common/BottomPanel";
import TwoImgPanel from "../common/TwoImgPanel";

import bottomPanelImg from "../img/tickets_stock.jpg";
import tipImg1 from "../img/itai3.jpg";
import tipImg2 from "../img/booklet.jpg";
import tipImg3 from "../img/yamatai2.jpg";
import tipImg4 from "../img/molc.jpg";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSpeaker: ""
    };
  }

  toggleActiveSpeaker = e => {
    this.setState({
      activeSpeaker: e.currentTarget.dataset.name
    });
  };

  experiences = {
    "A half-day event":
      "On April 28th, 2019, we're holding an afternoon event packed with exciting talks and performances you won't want to miss.",
    "Talks and Performances":
      "Our event will have 7 speakers and 1 performance group, local and from across the country, all here to share their best ideas with the Cornell community.",
    "Raffle merchandise":
      "Thanks to our generous sponsors, we've got some awesome merchandise to raffle off at our event. From Daniel Wellington gift baskets to a two night stay at Firelight Camp, we've got something for everyone.",
    "Volunteer opportunities":
      "Looking to help out on the day of the event? We're offering volunteer opportunities in which you can help with general ticketing activities or speaker assistance"
  };

  render() {
    return (
      <div>
        <div className="main-panel-events ">
          <SplitPanel img={eventsbg2} reverse={true}>
            <div className="sp-content-container">
              <div className="sp-content">
                <h1>Events</h1>

                <p className="lead font-weight-normal">
                  <em>TEDxCornellUniversity 2019 | 4.28.2019</em>
                  <br />
                  <b>Theme: &nbsp;Reframe</b>
                </p>
                <p className="lead font-weight-normal">
                  Get ready for our most ambitious conference to date. We're
                  bringing speakers from across the country and from our own
                  Cornell community in a one-of-a-kind event featuring talks and
                  performances that will entertain, inspire, inform, and move
                  you. Hope to see you there!
                </p>
              </div>
            </div>
          </SplitPanel>
        </div>

        <div id="about-event-panel">
          <h2>
            <em>"I begin with an idea and then it becomes something else." </em>
            - Pablo Picasso
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

        <TwoImgPanel imgLeft={tipImg3} imgRight={tipImg2} />

        <div id="event-second-panel">
          <h1>An afternoon of ideas and inspiration</h1>
          <p>
            Join us for an experience you won't find anywhere else at Cornell
            University. Here's an idea of what you can expect at our conference:
          </p>
          <div className="experience-div">
            {Object.keys(this.experiences).map((key, index) => (
              <div key={index}>
                <div className="lined-item">
                  <div className="lined-item-title">
                    <i className="fa fa-check" aria-hidden="true" /> &emsp;{" "}
                    {key}
                  </div>
                  <div className="lined-item-content md-screen-only">
                    {this.experiences[key]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <TwoImgPanel imgLeft={tipImg1} imgRight={tipImg4} />
        <div className="events-content">
          <div className="speakers-title-div">
            <h1>Our Lineup</h1>
            <p>
              TEDxCornellUniversity 2019 is proud to host 7 amazing speakers.
              From a venture capitalist to a TV personality, two of Cornell's
              own students, and a professional host, we've put together an
              impressive lineup you won't want to miss
            </p>
          </div>
          {/* Speakers Rendering */}
          <div className="container speakers-container">
            <Col xs={12} sm={6} md={4} lg={4} xl={4} className="speaker-div">
              <h2>Our Lineup</h2>
              <p>
                Join us on April 28, 2019 as we hear from an incredible lineup
                of speakers and performers from a wide range of disciplines.
              </p>
            </Col>
            {Object.keys(speakers_2019).map((key, index) => (
              <a
                key={index}
                href={`/speakers/${speakers_2019[key].url}`}
                className="plain-a"
              >
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  key={key.index}
                  data-name={speakers_2019[key].name}
                  onClick={this.toggleActiveSpeaker}
                >
                  <div>
                    <Profile
                      src={speakers_2019[key].img}
                      title={speakers_2019[key].title}
                      name={speakers_2019[key].name}
                      url={`/speakers/${speakers_2019[key].url}`}
                    />
                  </div>
                </Col>
              </a>
            ))}
          </div>
        </div>
        <BottomPanel
          img={bottomPanelImg}
          title="Reserve Your Spot"
          txt="Reserve your seat in Statler Auditorium on April 28th, 2019 to experience our event. Seven speakers, one performance, three hours you won't forget."
          button="Tickets"
          buttonHref="https://cornellconcerts.universitytickets.com/w/default.aspx?fbclid=IwAR2k2XgUpqTVmnCj-M9_Mpa6FYEnWx2Euus7aRv3YLsUAAVFh32SFztZTUA"
        />
      </div>
    );
  }
}

export default Events;
