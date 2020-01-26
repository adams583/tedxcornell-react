import React, { Component } from "react";
import "./ImageTextOverlap.css";
import { Image } from "react-bootstrap";
import CustomButton from "./buttons/CustomButton";
import ScrollMove from "./ScrollMove";

class ImageTextOverlap extends Component {
  constructor(props) {
    super(props);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleImageLoad() {
    this.props.onImgLoad();
  }

  render() {
    return (
      <div className="image-text-overlap">
        <div className="ito-img">
          <Image
            src={this.props.src}
            alt="Image not rendering"
            responsive
            onLoad={this.handleImageLoad}
          />
        </div>

        <div className="ito-txt">
          <ScrollMove>
            <div className="long-left-border">
              <h3>{this.props.title}</h3>
              <p>{this.props.content}</p>
              <CustomButton
                text={this.props.button}
                color="#e62b1e"
                href={this.props.buttonHref}
              />
            </div>
          </ScrollMove>
        </div>
      </div>
    );
  }
}

export default ImageTextOverlap;
