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
import GenericPanel from "../common/GenericPanel";

import YouTube from 'react-youtube';

class Speakers extends Component {
  constructor(props) {
    super(props);
  }

  scrollToYear(e) {
    const year = e.target.dataset.year;

    // the scroll value that we want to scroll to
    let yScroll;

    // select the speaker displays and check for the matching year
    document.querySelectorAll(".speakers-display").forEach(item => {
      if (item.dataset.year == year) {
        yScroll = item.offsetTop - 200;
      }
    });

    window.scrollTo(0, yScroll);
  }

  switchActiveYear(year) {
    console.log(year);
    document.querySelectorAll(".scroll-nav-year").forEach(item => {
      if (item.dataset.year == year) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  handleImageLoad() {
    // Get the scroll locations of all the different year sections
    const sections = document.querySelectorAll(".speakers-display");
    const scrollLocations = [...sections].map(
      section => section.offsetTop - 200
    );

    window.addEventListener("scroll", () => {
      if (window.scrollY < scrollLocations[0]) {
        this.switchActiveYear("");
      } else if (window.scrollY < scrollLocations[1]) {
        this.switchActiveYear("2019");
      } else if (window.scrollY < scrollLocations[2]) {
        this.switchActiveYear("2018");
      } else {
        this.switchActiveYear("2015");
      }
    });
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="speakers-wrapper">
        {/* Scroll side navigation */}
        <div id="speakers-scroll-nav">
          <div
            className="scroll-nav-year"
            data-year="2019"
            onClick={this.scrollToYear}
          >
            2019
          </div>
          <div
            className="scroll-nav-year"
            data-year="2018"
            onClick={this.scrollToYear}
          >
            2018
          </div>
          <div
            className="scroll-nav-year"
            data-year="2015"
            onClick={this.scrollToYear}
          >
            2015
          </div>
        </div>

        {/* Page title/heading section */}
        <div className="speakers-2019">
          <div className="speakers-image-panel">
            <div>
              <h1>Speakers</h1>
              <a class="btn text-danger" href="/apply">
                Apply Now
              </a>
            </div>
          </div>
          <GenericPanel
            content="Join us on April 28, 2019 as we hear from an incredible lineup
                of speakers and performers, including.. fill in info for all of
                our amazing speakers"
            title="Ideas that Matter"
          />
              <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={this._onReady}
              />

          <TaggedDivider tag="2019" />

          <div className="speakers-display" data-year="2019">
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
                    onLoad={this.handleImageLoad.bind(this)}
                  />
                </a>

                <div className="speaker-name">{speakers_2019[key].name}</div>
              </Col>
            ))}
          </div>

          <TaggedDivider tag="2018" />

          <div className="speakers-display" data-year="2018">
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
                    onLoad={this.handleImageLoad.bind(this)}
                  />
                </a>

                <div className="speaker-name">{speakers_2018[key].name}</div>
              </Col>
            ))}
          </div>

          <TaggedDivider tag="2015" />

          <div className="speakers-display" data-year="2015">
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
                    onLoad={this.handleImageLoad.bind(this)}
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
