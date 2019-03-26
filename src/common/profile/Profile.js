import React, { Component } from "react";
import "./Profile.css";
import { Image } from "react-bootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  activeStyle = {
    borderBottom: "solid thin #e62b1e"
  };

  render() {
    return (
      <div className="profile grow">
        <Image className="profile-img" src={this.props.src} responsive />
        <div
          className="profile-desc"
          style={this.props.active ? this.activeStyle : {}}
        >
          <h4>{this.props.name}</h4>
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
