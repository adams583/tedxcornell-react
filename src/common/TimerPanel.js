import React, { Component } from "react";
import "./TimerPanel.css";

// IN PROGRESS

class TimerPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timer-panel">
        <span className="timer-label">{} Days</span>
        <span className="timer-label">Hours</span>
        <span className="timer-label">Minutes</span>
        <span className="timer-label">Seconds</span>
      </div>
    );
  }
}

export default TimerPanel;
