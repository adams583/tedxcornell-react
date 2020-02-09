import React, { Component } from "react";
import "./VideoDisplay.css";
import { Image } from "react-bootstrap";

class VideoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {toggled: false};
  }

  render() {
    return (
     <div className="video-display">
        <Image className="video-thumbnail" src={this.props.video.src} responsive />
        <div className="video-description">
            <h3>{this.props.video.title}, by {this.props.video.speaker}</h3>
            <h5>{this.props.video.date}</h5>
            <p>{this.props.video.desc}</p>
        </div>
     </div>
    );
  }
}

export default VideoDisplay;

