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

  handleClick() {
    window.location.href = this.props.href;
  }

  render() {
    return (
      <button
        class="custom-button"
        style={this.styles}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.text}
      </button>
    );
  }
}

export default CustomButton;
