import React, { Component } from "react";
import "./Team.css";
import { Grid, Col, Row, Image } from "react-bootstrap";
import kirkland_pic from "../img/kirkland.jpg";
import sofiya_pic from "../img/Sofiya_Tsenter.png";
import adam_pic from "../img/adam2.jpg";
import eri_pic from "../img/eri.png";
import emily_pic from "../img/emilychen.jpeg";
import yeon_pic from "../img/Yeonsuk_Kim.jpg";
import akshu_pic from "../img/Akshu.png";
import tianyi_pic from "../img/Tianyi.jpg";
import liz_pic from "../img/liz_gunner.jpg";
import hebani_pic from "../img/hebani.jpeg";
import uzair_pic from "../img/uzair.jpg";

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

  changeYear(e) {
    let year = e.target.dataset.year;
    const displays = document.querySelectorAll(`.team-display`);
    displays.forEach(display => {
      if (display.dataset.year == year) {
        display.classList.add("active");
      } else {
        display.classList.remove("active");
      }
    });

    // Get coordinates of year selected
    const linkCoords = e.target.getBoundingClientRect();
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

    // Set the year indicator's dimensions to the dimensions of the year selected.
    yearIndicator.style.width = `${coords.width}px`;
    yearIndicator.style.height = `${coords.height}px`;
    yearIndicator.style.transform = `translate(${coords.left}px, ${
      coords.top
    }px)`;
  }

  showInfo(e) {
    const member = e.target.dataset.member; // The selected team member
    const infos = document.querySelectorAll(".team-member-info"); // NodeList of info panels
    const images = document.querySelectorAll(".profile-pic"); // NodeList of profile pics

    // Get coordinates of image
    const linkCoords = e.target.getBoundingClientRect();
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY + linkCoords.height / 10,
      left: linkCoords.left + window.scrollX + linkCoords.height / 10
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
    const emily = {
      name: "Emily Chen",
      info: "Info about emily",
      img: emily_pic
    };
    const adam = {
      name: "Adam Skrocki",
      info: "Info about Adam",
      img: adam_pic
    };
    const sofiya = {
      name: "Sofiya Tsenter",
      info: "Info about Sofiya",
      img: sofiya_pic
    };
    const eri = {
      name: "Eri Kato",
      info: "Info about Eri",
      img: eri_pic
    };
    const kirkland = {
      name: "Kirkland Sugrim",
      info: "Info about Kirkland",
      img: kirkland_pic
    };
    const yeon = {
      name: "Yeonsuk Kim",
      info: "Info about Yeon",
      img: yeon_pic
    };
    const akshu = {
      name: "Apekshita Alkesh",
      info: "Info about Akshu",
      img: akshu_pic
    };
    const tianyi = {
      name: "Tianyi Zhang",
      info: "Info about Tianyi",
      img: tianyi_pic
    };
    const liz = {
      name: "Elizabeth Gunner",
      info: "Info about Liz",
      img: liz_pic
    };
    const hebani = {
      name: "Hebani Duggal",
      info: "Info about Hebani",
      img: hebani_pic
    };
    const uzair = {
      name: "Uzair Butt",
      info: "Info about Uzair",
      img: uzair_pic
    };
    const team2019 = [emily, sofiya, adam, eri, kirkland, yeon, akshu, tianyi];
    const team2018 = [liz, hebani, adam, eri, kirkland, emily, uzair];

    return (
      <div id="team-container ">
        <div className="team-image-panel">
          <h1>Meet Our Team</h1>
        </div>
        <div className="team-content-panel">
          <div className="year-selector">
            <span
              id="2018-selector"
              className="year"
              data-year="2018"
              onClick={this.changeYear}
            >
              2018
            </span>
            <span
              id="2019-selector"
              className="year"
              data-year="2019"
              onClick={this.changeYear}
            >
              2019
            </span>
          </div>
          <div id="2018-team" className="team-display " data-year="2018">
            <div className="team-display-pics">
              {team2018.map(member => (
                <div className="container" key={member.index}>
                  <Image
                    className="profile-pic"
                    key={member.index}
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
                  className="team-member-info"
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
                    className="profile-pic"
                    key={member.index}
                    src={member.img}
                    responsive
                    data-member={member.name}
                    onClick={this.showInfo}
                  />
                </div>
              ))}
            </div>

            <div className="team-member-info-container">
              {team2019.map(member => (
                <div
                  className="team-member-info"
                  key={member.index}
                  data-member={member.name}
                >
                  <h4>{member.name}</h4>
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
