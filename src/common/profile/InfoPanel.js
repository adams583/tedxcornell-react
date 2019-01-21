import React, { Component } from "react";
import "./InfoPanel.css";

class InfoPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-panel">
        <div className="ip-section">
          <h4>{this.props.name}</h4>
          <p>{this.props.title}</p>
        </div>
        <div className="ip-section">
          <h5>About</h5>
          <p>{this.props.about}</p>
        </div>
      </div>
    );
  }
}
export default InfoPanel;
