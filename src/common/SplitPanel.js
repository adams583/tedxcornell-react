import React, { Component } from "react";
import "./SplitPanel.css";

class SplitPanel extends Component {
  styles = {
    backgroundImage: `url(${this.props.img})`,
    backgroundSize: "cover",
    padding: "330px 0px",
    flex: "1"
  };

  render() {
    return (
      <div className="split-panel">
        {this.props.reverse && (
          <div className="sp-left">{this.props.children}</div>
        )}
        <div className="sp-right" style={this.styles} />
        {!this.props.reverse && (
          <div className="sp-left">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default SplitPanel;
