import React, { Component } from "react";
import "./FAQ.css";

class CardSelector extends Component {
  constructor(props) {
    super(props);
  }

  selectedStyles = {
    transform: "scale(1.05)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    borderLeft: "solid  #08B2E3"
  };

  unselectedStyles = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)"
  };

  render() {
    return (
      <div
        className="card-selector"
        onClick={this.toggleSelect}
        style={
          this.props.selected ? this.selectedStyles : this.unselectedStyles
        }
      >
        <h5>{this.props.title}</h5>
        <p className="large-screen-only">{this.props.text}</p>
      </div>
    );
  }
}

export default CardSelector;
