import React, { Component } from "react";
import "./ErrorPage.css";
import CustomButton from "../common/CustomButton";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="error-page-container">
        <div className="error-message">Page not found.</div>
        <CustomButton text="Return Home" color="#e62b1e" href="/" />
      </div>
    );
  }
}

export default ErrorPage;
