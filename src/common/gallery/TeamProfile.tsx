import React from "react";
import "./TeamProfile.css";
import { Col, Image } from "react-bootstrap";

interface TeamProfileProps {
  linked: string; 
  img: string; 
  name: string;
  title: string; 
}

export const TeamProfile = React.memo(function TeamProfileFn({linked, img, name, title}: TeamProfileProps) {
    return (
      <Col xs={12} sm={6} md={4} lg={4} xl={4} className="team-profile grow">
        <div className="team-profile-img">
          <a href={linked}><Image src={img} responsive /></a>
        </div>
        <div className="team-profile-desc">
          <div className="team-profile-name">{name}</div>
          <div className="team-profile-title">{title}</div>
        </div>
      </Col>
    )
})

