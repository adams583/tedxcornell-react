import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./SplitPanel.css";

class SplitPanel extends Component {
  constructor(props) {
    super(props);
  }

  styles = {
    backgroundImage: `url(${this.props.img})`,
    backgroundSize: "cover",
    padding: "330px 0px",
    flex: "1"
  };

  render() {
    return (
      <div className="split-panel">
        <div className="sp-left">{this.props.children}</div>
        <div className="sp-right" style={this.styles} />
      </div>
    );
  }
}

export default SplitPanel;
