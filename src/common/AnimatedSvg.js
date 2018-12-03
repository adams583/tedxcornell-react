import React, { Component } from "react";
import "./AnimatedSvg.css";
import anime from "animejs";

function AnimatedSvg(props) {
  var svgAttributes = anime({
    targets: "#animatedSvg polygon",
    points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
    easing: "easeInOutExpo"
  });

  return (
    <div id="animatedSvg">
      <svg width="128" height="128" viewBox="0 0 128 128">
        <polygon points="64 69.05539614939788 8.574 99.9720083457279 63.062010486695414 67.43031444389293 64 3.972008345727906 64.93798951330459 67.43031444389293 119.426 99.9720083457279 " />
      </svg>
    </div>
  );
}

export default AnimatedSvg;
