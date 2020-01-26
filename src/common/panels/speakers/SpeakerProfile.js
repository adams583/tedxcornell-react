import React, { Component } from "react";
import "./SpeakerProfile.css";
import SplitPanel from "../common/panels/SplitPanel";
import MetaTags from "react-meta-tags";

import YouTube from 'react-youtube';

class SpeakerProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.person.backgroundImg})`,
      backgroundSize: "cover"
    };
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
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
            {this.props.person.vidId && (
              <div>
                <p>
                  Here is a video of 
                  &nbsp;
                  {this.props.person.name} speaking at TEDxCornell!
                </p>
                <div className="podcast-div">
                    <YouTube
                    videoId= {this.props.person.vidId}
                    opts={opts}
                    onReady={this._onReady}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default SpeakerProfile;
