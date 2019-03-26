import React, { Component } from "react";
import "./About.css";
import { team2019 } from "./members.js";
import ImageTextOverlap from "../common/ImageTextOverlap";
import audience1 from "../img/audience1.jpg";
import BottomPanel from "../common/BottomPanel";
import bottomPanelImg from "../img/teamImg.jpg";
import TeamProfile from "../common/gallery/TeamProfile";

// const selectIndicator = document.createElement("span");
// selectIndicator.classList.add("select-indicator");
// document.body.appendChild(selectIndicator);

// const yearIndicator = document.createElement("span");
// yearIndicator.classList.add("year-indicator");
// document.body.appendChild(yearIndicator);

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMember: ""
    };
  }

  componentDidMount() {
    // const activeYear = document.getElementById("2019-selector");
    // // Get coordinates of year selected
    // const yearCoords = activeYear.getBoundingClientRect();
    // const coords = {
    //   width: yearCoords.width,
    //   height: yearCoords.height,
    //   top: yearCoords.top + window.scrollY,
    //   left: yearCoords.left + window.scrollX
    // };
    // // Set the year indicator's dimensions to the dimensions of the year selected.
    // yearIndicator.style.width = `${coords.width}px`;
    // yearIndicator.style.height = `${coords.height}px`;
    // yearIndicator.style.transform = `translate(${coords.left}px, ${
    //   coords.top
    // }px)`;
    // yearIndicator.style.display = "block";
  }

  // handleImageLoad() {
  //   const defaultMemberImage = document.querySelectorAll(
  //     ".profile-pic-2019"
  //   )[0];
  //   // Make default member image active on load
  //   defaultMemberImage.classList.add("active");
  //   this.setState({ activeMember: defaultMemberImage.dataset.member });

  //   // Get coordinates of image
  //   const defaultImageCoords = defaultMemberImage.getBoundingClientRect();
  //   const imageCoords = {
  //     width: defaultImageCoords.width,
  //     height: defaultImageCoords.height,
  //     top:
  //       defaultImageCoords.top +
  //       window.scrollY +
  //       defaultImageCoords.height / 10,
  //     left:
  //       defaultImageCoords.left +
  //       window.scrollX +
  //       defaultImageCoords.height / 10
  //   };

  //   // Set the selectIndicator's dimensions to the dimensions of the image.
  //   selectIndicator.style.width = `${imageCoords.width}px`;
  //   selectIndicator.style.height = `${imageCoords.height}px`;
  //   selectIndicator.style.transform = `translate(${imageCoords.left}px, ${
  //     imageCoords.top
  //   }px)`;
  //   selectIndicator.style.display = "block";

  //   const activeYear = document.getElementById("2019-selector");

  //   // Get coordinates of year selected
  //   const yearCoords = activeYear.getBoundingClientRect();
  //   const coords = {
  //     width: yearCoords.width,
  //     height: yearCoords.height,
  //     top: yearCoords.top + window.scrollY,
  //     left: yearCoords.left + window.scrollX
  //   };

  //   // Set the year indicator's dimensions to the dimensions of the year selected.
  //   yearIndicator.style.width = `${coords.width}px`;
  //   yearIndicator.style.height = `${coords.height}px`;
  //   yearIndicator.style.transform = `translate(${coords.left}px, ${
  //     coords.top
  //   }px)`;
  //   yearIndicator.style.display = "block";
  // }

  // changeYear = e => {
  //   let year = e.target.dataset.year; // Year selected
  //   const displays = document.querySelectorAll(`.team-display`); // team displays for all years
  //   displays.forEach(display => {
  //     if (display.dataset.year == year) {
  //       display.classList.add("active");
  //     } else {
  //       display.classList.remove("active");
  //     }
  //   });

  //   // Get coordinates of year selected
  //   const yearCoords = e.target.getBoundingClientRect();
  //   const coords = {
  //     width: yearCoords.width,
  //     height: yearCoords.height,
  //     top: yearCoords.top + window.scrollY,
  //     left: yearCoords.left + window.scrollX
  //   };

  //   // Set the year indicator's dimensions to the dimensions of the year selected.
  //   yearIndicator.style.width = `${coords.width}px`;
  //   yearIndicator.style.height = `${coords.height}px`;
  //   yearIndicator.style.transform = `translate(${coords.left}px, ${
  //     coords.top
  //   }px)`;

  //   // When changing years, set default selection for display
  //   document
  //     .querySelectorAll(`.team-member-info-${year}`)
  //     .forEach((info, index) => {
  //       if (index == 0) {
  //         info.classList.add("active");
  //       } else {
  //         info.classList.remove("active");
  //       }
  //     });

  //   // Set all images inactive except for the default, done below
  //   document.querySelectorAll(`.profile-pic-${year}`).forEach(img => {
  //     img.classList.remove("active");
  //   });

  //   // When changing years, set default member to be selected
  //   const defaultMemberImage = document.querySelectorAll(
  //     `.profile-pic-${year}`
  //   )[0];
  //   defaultMemberImage.classList.add("active");
  //   this.setState({ activeMember: defaultMemberImage.dataset.member });

  //   // Get coordinates of image
  //   const defaultImageCoords = defaultMemberImage.getBoundingClientRect();
  //   const imageCoords = {
  //     width: defaultImageCoords.width,
  //     height: defaultImageCoords.height,
  //     top:
  //       defaultImageCoords.top +
  //       window.scrollY +
  //       defaultImageCoords.height / 10,
  //     left:
  //       defaultImageCoords.left +
  //       window.scrollX +
  //       defaultImageCoords.height / 10
  //   };

  //   // Set the selectIndicator's dimensions to the dimensions of the image.
  //   selectIndicator.style.width = `${imageCoords.width}px`;
  //   selectIndicator.style.height = `${imageCoords.height}px`;
  //   selectIndicator.style.transform = `translate(${imageCoords.left}px, ${
  //     imageCoords.top
  //   }px)`;
  // };

  // showInfo = e => {
  //   const member = e.target.dataset.member; // The selected team member
  //   const infos = document.querySelectorAll(".team-member-info"); // NodeList of info panels
  //   const images = document.querySelectorAll(".profile-pic"); // NodeList of profile pics

  //   this.setState({ activeMember: e.target.dataset.member });
  //   console.log(this.state.activeMember);

  //   // Get coordinates of image
  //   const imageCoords = e.target.getBoundingClientRect();
  //   const coords = {
  //     width: imageCoords.width,
  //     height: imageCoords.height,
  //     top: imageCoords.top + window.scrollY + imageCoords.height / 10,
  //     left: imageCoords.left + window.scrollX + imageCoords.height / 10
  //   };

  //   // Set the selectIndicator's dimensions to the dimensions of the image.
  //   selectIndicator.style.width = `${coords.width}px`;
  //   selectIndicator.style.height = `${coords.height}px`;
  //   selectIndicator.style.transform = `translate(${coords.left}px, ${
  //     coords.top
  //   }px)`;

  //   // Active info panel if selected, not active if not
  //   infos.forEach(info => {
  //     if (info.dataset.member == member) {
  //       info.classList.add("active");
  //     } else {
  //       info.classList.remove("active");
  //     }
  //   });
  //   // Active image if selected, not active if not
  //   images.forEach(img => {
  //     if (img.dataset.member == member) {
  //       img.classList.add("active");
  //     } else {
  //       img.classList.remove("active");
  //     }
  //   });
  // };

  render() {
    return (
      <div id="team-container ">
        <div className="team-image-panel">
          {/* <div className="container">
            <h1>A unique experience</h1>
            <a class="btn text-danger" href="/apply">
              Get Involved
            </a>
          </div> */}
          <div className="sp-content-container half-width">
            <div className="sp-content">
              <h1>About</h1>

              <p className="lead font-weight-normal">
                <em>What is TEDxCornellUniversity?</em>
              </p>
              <p className="lead font-weight-normal">
                Each year we organize a TEDx event operated under an official
                license from TED. Our goal is to bring a intellectual platform
                to Cornell unlike any other.
              </p>
            </div>
          </div>
        </div>
        <div id="about-first-panel">
          <h2>
            <em>"Spreading Ideas that Matter" </em>
          </h2>
          <p>
            Our annual TEDx conference brings together a diverse array of
            speakers, performers, and audience members all hoping to learn and
            share knowledge. TEDxCornellUniversity is completely student-run,
            with team members hard at work all year planning for the conference.
            We hope to create an environment in which students and community
            members can discuss ideas and connect with great speakers and
            performers
          </p>
        </div>
        <ImageTextOverlap
          // onImgLoad={this.handleImageLoad.bind(this)}
          onImgLoad={() => console.log("loaded")}
          title="Our Mission"
          content="We strive to provide a unique platform at Cornell through which top speakers and performers can teach, inspire, and entertain the Cornell community."
          button="See our Events"
          buttonHref="/events"
          src={audience1}
        />
        <div className="team-content-panel">
          <div className="container team-title">
            <h4 className="left-border">Meet our members</h4>
            <h1>Our Organizing Team</h1>
          </div>

          {/* <div className="year-selector container">
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
                <Col xs={6} sm={4} md={2} lg={1} key={member.index}>
                  <Image
                    className="profile-pic profile-pic-2018"
                    src={member.img}
                    responsive
                    data-member={member.name}
                    onClick={this.showInfo}
                  />
                </Col>
              ))}
            </div>

            <div className="team-member-info-container">
              {team2018.map(
                member =>
                  this.state.activeMember === member.name && (
                    <InfoPanel
                      className="team-member-info team-member-info-2018"
                      key={member.index}
                      data-member={member.name}
                      name={member.name}
                      title={member.netid}
                      about={member.info}
                    />
                  )
              )}
            </div>
          </div>
          <div id="2019-team" className="team-display active" data-year="2019">
            <div className="team-display-pics">
              {team2019.map(member => (
                <Col xs={6} sm={4} md={2} lg={1} key={member.index}>
                  <Image
                    className="profile-pic profile-pic-2019"
                    src={member.img}
                    responsive
                    data-member={member.name}
                    onClick={this.showInfo}
                    onLoad={this.handleImageLoad.bind(this)}
                  />
                </Col>
              ))}
            </div>

            <div className="team-member-info-container">
              {team2019.map(
                member =>
                  this.state.activeMember === member.name && (
                    <InfoPanel
                      className="team-member-info team-member-info-2019"
                      key={member.index}
                      data-member={member.name}
                      name={member.name}
                      title={member.netid}
                      about={member.info}
                    />
                  )
              )}
            </div>
          </div> */}
          <div className="team-gallery ">
            {team2019.map(member => (
              <TeamProfile
                key={member.name}
                img={member.img}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </div>

        <BottomPanel
          img={bottomPanelImg}
          title="Want to get involved?"
          txt="There are many ways to get involved in making our event happen - as a speaker, team member, volunteer, or sponsor. Visit our applications page to learn more."
          button="Get Involved"
          buttonHref="/apply"
        />
      </div>
    );
  }
}

export default About;

// "Meet our team members! The team's responsibilities involve selecting
//       and inviting speakers and performers, designing event-specific materials,
//       advertising, raising funds, establishing an online presence, and setting
//       up everything that happens on the day of the event. We're done recruiting
//       for fall 2018, but check back in the spring if you're interested in
//       joining!"

// https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec
