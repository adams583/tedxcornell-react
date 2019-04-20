import React, { Component } from "react";
import "./SpeakerProfile.css";
import SplitPanel from "../common/SplitPanel";
import MetaTags from "react-meta-tags";

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
        <MetaTags>
          <meta
            property="og:title"
            content={`${this.props.person.name}, ${this.props.person.title}`}
          />
          <meta property="og:description" content={this.props.person.info} />
          <meta property="og:image" content={this.props.person.img} />
          <meta
            property="og:url"
            content={`www.tedxcornell.com/speakers/${this.props.person.url}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </MetaTags>

        <SplitPanel img={this.props.person.img} profile={true}>
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
          <div className="left-border more-padding">
            <p>{this.props.person.info}</p>
            {this.props.person.podcastId && (
              <div>
                <p>
                  In preparation for our event, our host Lou Diamond interviewed
                  &nbsp;
                  {this.props.person.name}. Listen to the interview here for a
                  preview of this speaker's thoughts and ideas as they prepare
                  for April 28th.
                </p>
                <div className="podcast-div">
                  <iframe
                    src={`//html5-player.libsyn.com/embed/episode/id/${
                      this.props.person.podcastId
                    }/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e62b1e/`}
                    height="90"
                    width="100%"
                    scrolling="no"
                    allowFullScreen=""
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    oallowfullscreen=""
                    msallowfullscreen=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SpeakerProfile;
