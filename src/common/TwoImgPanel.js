import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./TwoImgPanel.css";

class TwoImgPanel extends Component {
  constructor(props) {
    super(props);
  }

  styleLeft = {
    // backgroundImage: `url(${this.props.imgLeft})`,
    // backgroundSize: "cover",
    // flex: "1"
  };

  styleRight = {
    // backgroundImage: `url(${this.props.imgRight})`,
    // backgroundSize: "cover",
    // flex: "1"
  };

  render() {
    return (
      <div className="two-img-panel">
        <div className="tip-left" style={this.styleLeft}>
          <Image className="tip-image" src={this.props.imgLeft} responsive />
        </div>
        <div className="tip-right" style={this.styleRight}>
          <Image className="tip-image" src={this.props.imgRight} responsive />
        </div>
      </div>
    );
  }
}

export default TwoImgPanel;
