import React from "react";
import "./BottomPanel.css";
import CustomButton from "../buttons/CustomButton";

export default function BottomPanel({img, title, txt, button, buttonHref}) {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    padding: "200px 10%"
  };

  return (
    <div className="bottom-panel" style={styles}>
      <h4 className="bp-title">{title}</h4>
      <p className="bp-text">{txt}</p>
      <div>
        <CustomButton
          color="#08b2e3"
          text={button}
          href={buttonHref}
          lightText
        />
      </div>
    </div>
  );
}
