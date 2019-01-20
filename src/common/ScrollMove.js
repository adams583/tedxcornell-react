import React, { Component } from "react";
import "./ScrollMove.css";

class ScrollMove extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let container = document.querySelector(".scroll-move");
    const topLoc = document.querySelector(".ito-img").getBoundingClientRect()
      .top;
    window.addEventListener("scroll", e =>
      this.handleScroll(e, container, topLoc)
    );
  }

  componentWillUnmount() {
    let container = document.querySelector(".scroll-move");
    const topLoc = document.querySelector(".ito-img").getBoundingClientRect()
      .top;
    window.removeEventListener("scroll", e =>
      this.handleScroll(e, container, topLoc)
    );
  }

  handleScroll(e, elem, topLoc) {
    let translate = (topLoc - window.scrollY) * 0.05;
    console.log(translate);
    elem.style.transform = `translateY(${translate}px)`;
  }

  render() {
    return <div className="scroll-move">{this.props.children}</div>;
  }
}

export default ScrollMove;
