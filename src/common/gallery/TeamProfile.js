import React, { Component } from "react";
import "./TeamProfile.css";
import { Col, Image } from "react-bootstrap";

class TeamProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={4} xl={4} className="team-profile grow">
        <div className="team-profile-img" style={this.imgStyle}>
          <Image src={this.props.img} responsive />
        </div>
        <div className="team-profile-desc">
          <div className="team-profile-name">{this.props.name}</div>
          <div className="team-profile-title">{this.props.title}</div>
        </div>
      </Col>
    );
  }
}

export default TeamProfile;
