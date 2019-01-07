import React, { Component } from "react";
import "./Speakers.css";
import { Row, Col, Grid, Image, Thumbnail } from "react-bootstrap";
import {
  speakers_2019,
  speakers_2018,
  speakers_2015
} from "./speaker-profiles";
import { Link } from "react-router-dom";
import TaggedDivider from "../common/TaggedDivider";

console.log(speakers_2019);

class Speakers extends Component {
  render() {
    return (
      <div className="speakers-wrapper">
        <div className="speakers-2019">
          <div className="speakers-title-panel">
            <div className="center-content">
              <h1>TEDxCornellUniversity 2019</h1>
            </div>
            <div className="center-content">
              <h2>Speaker Lineup</h2>
            </div>
            <div className="center-content">
              <div>
                Join us on April 28, 2019 as we hear from an incredible lineup
                of speakers and performers, including.. fill in info for all of
                our amazing speakers
              </div>
            </div>
            <div className="hr" />
          </div>

          <TaggedDivider tag="2019" />

          <div className="speakers-display">
            {Object.keys(speakers_2019).map(key => (
              <Col className="speaker-panel" xs={12} sm={6} md={4} lg={4}>
                <a
                  className="fitted-a"
                  href={`/speakers/${speakers_2019[key].url}`}
                >
                  <Image
                    className="fitted-image"
                    src={speakers_2019[key].img}
                    responsive
                  />
                </a>

                <div className="speaker-name">{speakers_2019[key].name}</div>
              </Col>
            ))}
          </div>

          <TaggedDivider tag="2018" />
          <div className="speakers-display">
            {Object.keys(speakers_2018).map(key => (
              <Col className="speaker-panel" xs={12} sm={6} md={4} lg={4}>
                <a
                  className="fitted-a"
                  href={`/speakers/${speakers_2018[key].url}`}
                >
                  <Image
                    className="fitted-image"
                    src={speakers_2018[key].img}
                    responsive
                  />
                </a>

                <div className="speaker-name">{speakers_2018[key].name}</div>
              </Col>
            ))}
          </div>

          <TaggedDivider tag="2015" />
          <div className="speakers-display">
            {Object.keys(speakers_2015).map(key => (
              <Col className="speaker-panel" xs={12} sm={6} md={4} lg={4}>
                <a
                  className="fitted-a"
                  href={`/speakers/${speakers_2015[key].url}`}
                >
                  <Image
                    className="fitted-image"
                    src={speakers_2015[key].img}
                    responsive
                  />
                </a>

                <div className="speaker-name">{speakers_2015[key].name}</div>
              </Col>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
