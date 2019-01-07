import React, { Component } from "react";
import "./GenericPanel.css";

class GenericPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="container generic-panel"
        style={{ backgroundColor: this.props.color }}
      >
        <h3 className="generic-panel-title">{this.props.title}</h3>
        <p className="generic-panel-content">{this.props.content}</p>
      </div>
    );
  }
}

export default GenericPanel;
