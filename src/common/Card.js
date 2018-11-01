import React, { Component } from "react";
import { Panel } from "react-bootstrap";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  styles = {
    padding: "20px"
  };

  render() {
    return (
      <Panel style={this.styles}>
        <Panel.Title>{this.props.title}</Panel.Title>
        <Panel.Body>
          {this.props.text}
          {this.props.children}
        </Panel.Body>
      </Panel>
    );
  }
}

export default Card;
