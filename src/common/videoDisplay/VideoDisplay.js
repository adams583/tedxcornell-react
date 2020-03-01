import React, { Component } from "react";
import "./VideoDisplay.css";
import { Image } from "react-bootstrap";

class VideoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  selectedStyles = {
    transform: "scale(1.05)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    borderBottom: "solid  #e62b1e"
  };

  unselectedStyles = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)"
  };


  render() {
    return (
     <div className="video-display"
       style={
          this.props.toggled ? this.selectedStyles : this.unselectedStyles
        }

        onClick={() => this.props.onClick()}
        >
        <Image className="video-thumbnail" src={this.props.src} responsive/>
        <div className="video-description">
            <h4><strong>{this.props.title}</strong></h4>
            <h5>by {this.props.speaker}</h5>
            <h5>{this.props.date}</h5>
            <p>{this.props.desc}</p>
        </div>
     </div>
    );
  }
}

export default VideoDisplay;

