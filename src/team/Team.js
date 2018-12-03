import React, { Component } from "react";
import "./Team.css";
import { Grid, Col, Row, Image } from "react-bootstrap";
import kirkland from "../img/kirkland.jpg";
import sofiya from "../img/Sofiya_Tsenter.png";
import adam from "../img/adam2.jpg";
import eri from "../img/eri.png";
import emily from "../img/emilychen.jpeg";
import yeon from "../img/Yeonsuk_Kim.jpg";
import akshu from "../img/Akshu.png";
import tianyi from "../img/Tianyi.jpg";

class Team extends Component {
  render() {
    const teamList = [
      [emily, adam],
      [sofiya, eri],
      [kirkland, yeon],
      [akshu, tianyi]
    ];

    return (
      <div className="team-container ">
        <div className="team-content container">
          {/* <div className="team-title">
            <h2>Our Team</h2>
            <p>
              Meet our 2019 team members! The team's responsibilities involve
              selecting and inviting speakers and performers, designing
              event-specific materials, advertising, raising funds, establishing
              an online presence, and setting up everything that happens on the
              day of the event. We're done recruiting for fall 2018, but check
              back in the spring if you're interested in joining!
            </p>
          </div> */}
          <Grid className="team-year-grid">
            <Row>
              <h3>2019</h3>
            </Row>
            <Row md={12}>
              <Col md={4}>
                {teamList.map(row => (
                  <Row key={row.index} className="images-row">
                    {row.map(person => (
                      <Col md={6} key={person.index}>
                        <Image src={person} responsive />
                      </Col>
                    ))}
                  </Row>
                ))}
              </Col>
              <Col md={8} />
            </Row>
          </Grid>
          <Grid className="team-year-grid">
            <Row>
              <h3>2018</h3>
            </Row>
            <Row>awef</Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Team;
