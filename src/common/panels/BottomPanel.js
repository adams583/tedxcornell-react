import React, { Component } from "react";
import "./BottomPanel.css";
import CustomButton from "../buttons/CustomButton";

class BottomPanel extends Component {
  constructor(props) {
    super(props);
  }

  styles = {
    backgroundImage: `url(${this.props.img})`,
    backgroundSize: "cover",
    padding: "200px 10%"
  };

  render() {
    return (
      <div className="bottom-panel" style={this.styles}>
        <h4 className="bp-title">{this.props.title}</h4>
        <p className="bp-text">{this.props.txt}</p>
        <div>
          <CustomButton
            color="#08b2e3"
            text={this.props.button}
            href={this.props.buttonHref}
            lightText
          />
        </div>
      </div>
    );
  }
}

export default BottomPanel;
