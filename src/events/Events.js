import React, { Component } from "react";
import "./Events.css";
import Profile from "../common/profile/Profile";
import {
  speakers_2019,
  speakers_2018,
  speakers_2015
} from "../speakers/speaker-profiles";
import { Col } from "react-bootstrap";
import InfoPanel from "../common/profile/InfoPanel";

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

  render() {
    return (
      <div>
        <div className="main-panel-events ">
          <div className="text-center mx-auto">
            <h1>Events</h1>

            <p className="lead font-weight-normal">
              Upcoming: TEDxCornellUniversity 2019 | April 18, 2019
            </p>
          </div>
        </div>
        <div className="events-content">
          {/* Speakers Rendering */}
          <div className="container speakers-container">
            <Col xs={12} sm={6} md={4} lg={4} xl={4} className="speaker-div">
              <h4>Our Speakers</h4>
              <p>
                Join us on April 28, 2019 as we hear from an incredible lineup
                of speakers and performers, including.. fill in info for all of
                our amazing speakers
              </p>
            </Col>
            {Object.keys(speakers_2019).map(key => (
              <div key={key.index}>
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
                      title="Title placeholder"
                      name={speakers_2019[key].name}
                    />
                  </div>
                </Col>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
