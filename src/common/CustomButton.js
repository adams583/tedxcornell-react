import React, { Component } from "react";
import "./CustomButton.css";

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  styles = {
    backgroundColor: this.props.color,
    borderColor: this.props.color
  };

  render() {
    return (
      <button class="custom-button" style={this.styles}>
        {this.props.text}
      </button>
    );
  }
}

export default CustomButton;
