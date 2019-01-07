import React, { Component } from "react";
import "./Team.css";
import { Grid, Col, Row, Image } from "react-bootstrap";
import { team2018, team2019 } from "./members.js";
import GenericPanel from "../common/GenericPanel.js";

const selectIndicator = document.createElement("span");
selectIndicator.classList.add("select-indicator");
document.body.appendChild(selectIndicator);

const yearIndicator = document.createElement("span");
yearIndicator.classList.add("year-indicator");
document.body.appendChild(yearIndicator);

class Team extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Select the default active info, the first member
    const defaultInfo = document.querySelectorAll(".team-member-info-2019")[0];
    defaultInfo.classList.add("active");

    const activeYear = document.getElementById("2019-selector");

    // Get coordinates of year selected
    const yearCoords = activeYear.getBoundingClientRect();
    const coords = {
      width: yearCoords.width,
      height: yearCoords.height,
      top: yearCoords.top + window.scrollY,
      left: yearCoords.left + window.scrollX
    };

    // Set the year indicator's dimensions to the dimensions of the year selected.
    yearIndicator.style.width = `${coords.width}px`;
    yearIndicator.style.height = `${coords.height}px`;
    yearIndicator.style.transform = `translate(${coords.left}px, ${
      coords.top
    }px)`;
    yearIndicator.style.display = "block";
  }

  handleImageLoad() {
    const defaultMemberImage = document.querySelectorAll(
      ".profile-pic-2019"
    )[0];
    // Make default member image active on load
    defaultMemberImage.classList.add("active");
    // Get coordinates of image
    const defaultImageCoords = defaultMemberImage.getBoundingClientRect();
    const imageCoords = {
      width: defaultImageCoords.width,
      height: defaultImageCoords.height,
      top:
        defaultImageCoords.top +
        window.scrollY +
        defaultImageCoords.height / 10,
      left:
        defaultImageCoords.left +
        window.scrollX +
        defaultImageCoords.height / 10
    };

    // Set the selectIndicator's dimensions to the dimensions of the image.
    selectIndicator.style.width = `${imageCoords.width}px`;
    selectIndicator.style.height = `${imageCoords.height}px`;
    selectIndicator.style.transform = `translate(${imageCoords.left}px, ${
      imageCoords.top
    }px)`;
    selectIndicator.style.display = "block";
  }

  changeYear(e) {
    let year = e.target.dataset.year; // Year selected
    const displays = document.querySelectorAll(`.team-display`); // team displays for all years
    displays.forEach(display => {
      if (display.dataset.year == year) {
        display.classList.add("active");
      } else {
        display.classList.remove("active");
      }
    });

    // Get coordinates of year selected
    const yearCoords = e.target.getBoundingClientRect();
    const coords = {
      width: yearCoords.width,
      height: yearCoords.height,
      top: yearCoords.top + window.scrollY,
      left: yearCoords.left + window.scrollX
    };

    // Set the year indicator's dimensions to the dimensions of the year selected.
    yearIndicator.style.width = `${coords.width}px`;
    yearIndicator.style.height = `${coords.height}px`;
    yearIndicator.style.transform = `translate(${coords.left}px, ${
      coords.top
    }px)`;

    // When changing years, set default selection for display
    document
      .querySelectorAll(`.team-member-info-${year}`)
      .forEach((info, index) => {
        if (index == 0) {
          info.classList.add("active");
        } else {
          info.classList.remove("active");
        }
      });

    // Set all images inactive except for the default, done below
    document.querySelectorAll(`.profile-pic-${year}`).forEach(img => {
      img.classList.remove("active");
    });

    // When changing years, set default member to be selected
    const defaultMemberImage = document.querySelectorAll(
      `.profile-pic-${year}`
    )[0];
    defaultMemberImage.classList.add("active");

    // Get coordinates of image
    const defaultImageCoords = defaultMemberImage.getBoundingClientRect();
    const imageCoords = {
      width: defaultImageCoords.width,
      height: defaultImageCoords.height,
      top:
        defaultImageCoords.top +
        window.scrollY +
        defaultImageCoords.height / 10,
      left:
        defaultImageCoords.left +
        window.scrollX +
        defaultImageCoords.height / 10
    };

    // Set the selectIndicator's dimensions to the dimensions of the image.
    selectIndicator.style.width = `${imageCoords.width}px`;
    selectIndicator.style.height = `${imageCoords.height}px`;
    selectIndicator.style.transform = `translate(${imageCoords.left}px, ${
      imageCoords.top
    }px)`;
  }

  showInfo(e) {
    const member = e.target.dataset.member; // The selected team member
    const infos = document.querySelectorAll(".team-member-info"); // NodeList of info panels
    const images = document.querySelectorAll(".profile-pic"); // NodeList of profile pics

    // Get coordinates of image
    const imageCoords = e.target.getBoundingClientRect();
    const coords = {
      width: imageCoords.width,
      height: imageCoords.height,
      top: imageCoords.top + window.scrollY + imageCoords.height / 10,
      left: imageCoords.left + window.scrollX + imageCoords.height / 10
    };

    // Set the selectIndicator's dimensions to the dimensions of the image.
    selectIndicator.style.width = `${coords.width}px`;
    selectIndicator.style.height = `${coords.height}px`;
    selectIndicator.style.transform = `translate(${coords.left}px, ${
      coords.top
    }px)`;

    // Active info panel if selected, not active if not
    infos.forEach(info => {
      if (info.dataset.member == member) {
        info.classList.add("active");
      } else {
        info.classList.remove("active");
      }
    });
    // Active image if selected, not active if not
    images.forEach(img => {
      if (img.dataset.member == member) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  }

  render() {
    return (
      <div id="team-container ">
        <div className="team-image-panel">
          <div className="container">
            <h1>Meet Our Team</h1>
            <a class="btn text-danger" href="/apply">
              Get Involved
            </a>
          </div>
        </div>
        <GenericPanel
          title="Spreading Ideas that Matter"
          content="Meet our team members! The team's responsibilities involve selecting
      and inviting speakers and performers, designing event-specific materials,
      advertising, raising funds, establishing an online presence, and setting
      up everything that happens on the day of the event. We're done recruiting
      for fall 2018, but check back in the spring if you're interested in
      joining!"
        />
        <div className="team-content-panel">
          <div className="year-selector container">
            <h4
              id="2018-selector"
              className="year"
              data-year="2018"
              onClick={this.changeYear}
            >
              2018
            </h4>
            <h4
              id="2019-selector"
              className="year"
              data-year="2019"
              onClick={this.changeYear}
            >
              2019
            </h4>
          </div>
          <div id="2018-team" className="team-display " data-year="2018">
            <div className="team-display-pics">
              {team2018.map(member => (
                <div className="container " key={member.index}>
                  <Image
                    className="profile-pic profile-pic-2018"
                    src={member.img}
                    responsive
                    data-member={member.name}
                    onClick={this.showInfo}
                  />
                </div>
              ))}
            </div>

            <div className="team-member-info-container">
              {team2018.map(member => (
                <div
                  className="team-member-info team-member-info-2018"
                  key={member.index}
                  data-member={member.name}
                >
                  <h4>{member.name}</h4>
                  <p>{member.info}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="2019-team" className="team-display active" data-year="2019">
            <div className="team-display-pics">
              {team2019.map(member => (
                <div className="container" key={member.index}>
                  <Image
                    className="profile-pic profile-pic-2019"
                    src={member.img}
                    responsive
                    data-member={member.name}
                    onClick={this.showInfo}
                    onLoad={this.handleImageLoad.bind(this)}
                  />
                </div>
              ))}
            </div>

            <div className="team-member-info-container">
              {team2019.map(member => (
                <div
                  className="team-member-info team-member-info-2019"
                  key={member.index}
                  data-member={member.name}
                >
                  <h4>{member.name}</h4>
                  <h5>{member.netid}</h5>
                  <p>{member.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

{
  /* <div className="team-content container">
  <div className="team-title">
    <h2>Our Team</h2>
    <p>
      Meet our 2019 team members! The team's responsibilities involve selecting
      and inviting speakers and performers, designing event-specific materials,
      advertising, raising funds, establishing an online presence, and setting
      up everything that happens on the day of the event. We're done recruiting
      for fall 2018, but check back in the spring if you're interested in
      joining!
    </p>
  </div>
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
</div>; */
}
