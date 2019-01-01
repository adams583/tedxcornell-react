import React, { Component } from "react";
import "./GenericPanel.css";

class GenericPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container generic-panel">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default GenericPanel;
