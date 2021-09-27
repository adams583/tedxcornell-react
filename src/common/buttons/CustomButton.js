import React from "react";
import "./CustomButton.css";

export default function CustomButton(props) {

  const styles = {
    backgroundColor: props.color,
    borderColor: props.color,
    color: props.lightText ? "#f4f4f4" : "#1f1f1f"
  };

  const handleClick = () => window.location.href = props.href;
  
  return (
    <button
      className="custom-button"
      style={styles}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}