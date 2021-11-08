import React from "react";
import "./About.css";
import { team2022 } from "./members.js";
import {ImageTextOverlap} from "../common/ImageTextOverlap";
import workingteam from "../img/workingteam.jpg";
import BottomPanel from "../common/panels/BottomPanel";
import bottomPanelImg from "../img/team2019.jpg";
import TeamProfile from "../common/gallery/TeamProfile";


export const About = React.memo(function AboutFn() {
  return (
    <div id="team-container ">
      <div className="team-image-panel">
        <div className="sp-content-container half-width">
          <div className="sp-content">
            <h1>About</h1>

            <p className="lead font-weight-normal">
              <em>What is TEDxCornell?</em>
            </p>
            <p className="lead font-weight-normal">
              Each year we organize TEDx events and salons operated under an official
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
          Our TEDx conferences bring together a diverse array of
          speakers, performers, and audience members all hoping to learn and
          share knowledge. TEDxCornell is completely student-run,
          with team members hard at work all year planning for the conferences.
          We hope to create an environment in which students and community
          members can discuss ideas and connect with great speakers and
          performers
        </p>
      </div>
      <ImageTextOverlap
        title="Our Mission"
        content="We strive to provide a unique platform at Cornell through which top speakers and performers can teach, inspire, and entertain the Cornell community."
        button="See our Events"
        buttonHref="/events"
        src={workingteam}
      />
      <div className="team-content-panel">
        <div className="container team-title">
          <h4 className="left-border">Meet our members</h4>
          <h1>Our Organizing Team</h1>
        </div>

        <div className="team-gallery ">
          {team2022.map(member => (
            <TeamProfile
              key={member.name}
              img={member.img}
              name={member.name}
              title={member.title}
              linked={member.linked}
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
    </div>);
    }
  )



export default About;