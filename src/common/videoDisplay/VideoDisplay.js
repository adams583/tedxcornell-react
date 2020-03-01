import React, { Component } from "react";
import "./VideoDisplay.css";
import { Image } from "react-bootstrap";

class VideoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="video-display">
        <Image className="video-thumbnail" src={this.props.src} responsive onClick={() => this.props.onClick()}/>
        <div className="video-description">
            <h3>{this.props.title}</h3>
            <h4>by {this.props.speaker}</h4>
            <h5>{this.props.date}</h5>
            <p>{this.props.desc}</p>
        </div>
     </div>
    );
  }
}

export default VideoDisplay;

