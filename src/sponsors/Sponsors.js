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
import khouse from "../img/khouse.jpg";
import ctb from "../img/ctb.png";

class Sponsors extends Component {
  sponsorLogos = [cals, eng, firelight, dw, cc, farmersmkt, khouse, utea, ctb];
  sponsorInfo = [
    { img: cals, desc: "" },
    { img: eng, desc: "" },
    { img: firelight, desc: "Free 2-night Stay" },
    { img: dw, desc: "2 Free Bundle Boxes" },
    { img: cc, desc: "" },
    { img: farmersmkt, desc: "$25 Certificate + Gift Bag" },
    { img: khouse, desc: "Free Karaoke Hour + Gift Bag" },
    { img: utea, desc: "$25 Certificate + Gift Bag" },
    { img: ctb, desc: "" }
  ];

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
          <div className="sponsors-text">
            <h3>Sponsors</h3>
            <div className="left-border">
              <p>
                Our event would not have been possible without our amazing
                sponsors! we’d love to recognize them for all their
                contributions to TEDxCornellUniversity 2019.
              </p>
              <p>
                Every event ticket gave a free entry into our raffle. See below
                for the prizes our raffle sponsors contributed.
              </p>
            </div>
          </div>

          <div className="logos-container">
            {this.sponsorInfo.map((sponsor, ind) => (
              <Col
                xl={3}
                lg={3}
                md={4}
                sm={6}
                xs={6}
                key={ind}
                className="sponsor-logo-container"
              >
                <Image src={sponsor.img} responsive />
                <span className="text-center font-weight-light">
                  {sponsor.desc}
                </span>
              </Col>
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
