import React, { Component } from "react";
import "./SpeakerProfile.css";
import GenericPanel from "../common/GenericPanel";

class SpeakerProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.person.backgroundImg})`,
      backgroundSize: "cover"
    };
    return (
      <div id="speaker-profile-wrapper">
        <div className="main-profile-panel" style={styles}>
          <div id="speaker-name-panel">
            <h1>{this.props.person.name}</h1>
          </div>
        </div>
        <GenericPanel
          title="Talk Title"
          content={`${this.props.person.info}`}
        />
      </div>
    );
  }
}

export default SpeakerProfile;
