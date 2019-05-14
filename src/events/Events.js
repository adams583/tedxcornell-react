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
import CustomButton from "../common/CustomButton";
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
      "Our event will have 6 speakers and 1 performance group, local and from across the country, all here to share their best ideas with the Cornell community.",
    "Raffle merchandise":
      "Every ticket comes with a free raffle entry. From Daniel Wellington gift baskets to a two night stay at Firelight Camp, we've got something for everyone.",
    "Volunteer opportunities":
      "Looking to help out on the day of the event? We're offering volunteer opportunities in which you can help with general ticketing activities or speaker assistance"
  };

  render() {
    return (
      <div>
        <div className="main-panel-events ">
          <SplitPanel img={eventsbg2} reverse={true} profile={false}>
            <div className="sp-content-container">
              <div className="sp-content">
                <h1>Events</h1>

                <p className="lead font-weight-normal">
                  <em>TEDxCornellUniversity 2019 | 4.28.2019</em>
                  <br />
                  <b>Theme: &nbsp;Reframe</b>
                </p>
                <p className="lead font-weight-normal">
                  In our most ambitious conference to date, we brought speakers
                  from across the country and from our own Cornell community in
                  a one-of-a-kind event featuring talks and performances that
                  entertained, inspired, informed, and moved our audience. Thank
                  you to everyone who supported this year's event!
                </p>
              </div>
            </div>
          </SplitPanel>
        </div>

        <div id="about-event-panel">
          <h2>
            <em>"We are a way for the universe to know itself.” </em>- Carl
            Sagan
          </h2>
          <p>
            At TEDxCornellUniversity 2019, from exploring the boundaries of
            technology to challenging the way we see ourselves, we hoped to
            provide a diverse and entertaining array of ideas that everyone
            would find accessible, interesting, and applicable to their own
            lives.
          </p>
          <p>
            Through spreading ideas at Cornell, we continue in the spirit of all
            of the amazing people that have passed through this university and
            contributed to the individuals in this community and beyond.
          </p>
        </div>

        <TwoImgPanel imgLeft={tipImg3} imgRight={tipImg2} />

        <div id="event-second-panel">
          <h1>An afternoon of ideas and inspiration</h1>
          <p>
            Join us for an experience you won't find anywhere else at Cornell
            University. Here's an idea of what our most recent conference
            included:
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
              TEDxCornellUniversity 2019 hosted 6 amazing speakers. From a
              venture capitalist to a neuroscientist, two of Cornell's own
              students, and a professional host, we were proud to feature
              everyone involved in making this year's event happen.
            </p>
          </div>
          {/* Speakers Rendering */}
          <div className="container speakers-container">
            <Col xs={12} sm={6} md={4} lg={4} xl={4} className="speaker-div">
              <h2>Our Lineup</h2>
              <p>
                On April 28, 2019 we heard from an incredible lineup of speakers
                and performers from a wide range of disciplines.
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
          txt="Reserve your seat in Statler Auditorium on April 28th, 2019 to experience our event. Six speakers, one performance, three hours you won't forget."
          button="Ticketing Closed"
          buttonHref=""
        />
      </div>
    );
  }
}

export default Events;
