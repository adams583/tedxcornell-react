import React, { Component } from "react";
import "./Sponsors.css";
import BottomPanel from "../common/BottomPanel";
import { Image, Col } from "react-bootstrap";
import bpImg from "../img/partnership.jpg";
import cals from "../img/cornellCals.png";
import eng from "../img/cornellEng_logo.png";
import firelight from "../img/firelight.png";
import dw from "../img/DW_logo.png";
import cc from "../img/class_council.png";
import utea from "../img/utea.png";
import farmersmkt from "../img/farmers_market.png";

class Sponsors extends Component {
  sponsorLogos = [cals, eng, firelight, dw, cc, farmersmkt, utea];

  render() {
    return (
      <div id="sponsors-container">
        <div className="sponsors-image-panel">
          <div className="sp-content-container half-width">
            <div className="sp-content">
              <h1>Sponsors</h1>

              <p className="lead font-weight-normal">
                <em>Thank you to all of our 2019 partners</em>
              </p>
            </div>
          </div>
        </div>

        <div className="sponsors-content">
          <h3>Sponsors</h3>
          <div className="logos-container">
            {this.sponsorLogos.map((logo, ind) => (
              <div key={ind} className="sponsor-logo-container">
                <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                  <Image src={logo} responsive />
                </Col>
              </div>
            ))}
          </div>
        </div>
        {/* <BottomPanel
          img={bpImg}
          title="Interested in partnering with us?"
          txt="Are you interested in helping support TEDxCornellUniversity? Is there something you think you could offer to improve our event? If so, we'd love to get in touch!"
          button="Contact Us"
          buttonHref="/apply"
        /> */}
      </div>
    );
  }
}

export default Sponsors;
