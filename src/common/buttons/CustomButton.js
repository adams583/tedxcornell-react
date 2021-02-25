import React from "react";
import "./CustomButton.css";

function CustomButton(props){

  const styles = {
    backgroundColor: props.color,
    borderColor: props.color,
    color: props.lightText ? "#f4f4f4" : "#1f1f1f"
  };

  function handleClick() {
    window.location.href = props.href;
  }

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

export default CustomButton;
