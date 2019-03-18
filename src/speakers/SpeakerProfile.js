import React, { Component } from "react";
import "./SpeakerProfile.css";
import SplitPanel from "../common/SplitPanel";

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
        <SplitPanel img={this.props.person.img}>
          <div className="sp-content-container">
            <div className="sp-content">
              <h1>{this.props.person.name}</h1>

              <p className="lead font-weight-normal">
                <em>{this.props.person.title}</em>
              </p>
              <h4>{this.props.person.talkTitle}</h4>
              <p className="lead font-weight-normal">
                {this.props.person.talkInfo}
              </p>
            </div>
          </div>
        </SplitPanel>
        <div id="speaker-profile-desc">
          <h3>
            <b>About</b>
          </h3>
          <p className="left-border more-padding">{this.props.person.info}</p>
        </div>
      </div>
    );
  }
}

export default SpeakerProfile;
