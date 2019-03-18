import React, { Component } from "react";
import "./TwoImgPanel.css";

class TwoImgPanel extends Component {
  constructor(props) {
    super(props);
  }

  styleLeft = {
    backgroundImage: `url(${this.props.imgLeft})`,
    backgroundSize: "cover",
    padding: "250px 100px",
    flex: "1"
  };

  styleRight = {
    backgroundImage: `url(${this.props.imgRight})`,
    backgroundSize: "cover",
    padding: "250px 100px",
    flex: "1"
  };

  render() {
    return (
      <div className="two-img-panel">
        <div className="tip-left" style={this.styleLeft} />
        <div className="tip-right" style={this.styleRight} />
      </div>
    );
  }
}

export default TwoImgPanel;
