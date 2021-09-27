import React from "react";
import { Image } from "react-bootstrap";
import "./TwoImgPanel.css";

export default function TwoImgPanel({imgLeft, imgRight}) {
    return (
      <div className="two-img-panel">
        <div className="tip-left">
          <Image className="tip-image" src={imgLeft} responsive />
        </div>
        <div className="tip-right">
          <Image className="tip-image" src={imgRight} responsive />
        </div>
      </div>
    );
  }
