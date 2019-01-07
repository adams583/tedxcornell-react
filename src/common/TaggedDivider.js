import React, { Component } from "react";
import "./TaggedDivider.css";

class TaggedDivider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="tagged-divider">
        <h3>{this.props.tag}</h3>
      </div>
    );
  }
}

export default TaggedDivider;
