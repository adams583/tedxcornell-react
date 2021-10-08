import React from "react";
import "./ImageTextOverlap.css";
import { Image } from "react-bootstrap";
import CustomButton from "./buttons/CustomButton";
import ScrollMove from "./ScrollMove";

export const ImageTextOverlap = React.memo(function ImageTextOverlapFn({src, title, content, button, buttonHref}) {
    return (
      <div className="image-text-overlap">
        <div className="ito-img">
          <Image
            src={src}
            alt="Image not rendering"
            responsive
          />
        </div>

        <div className="ito-txt">
          <ScrollMove>
            <div className="long-left-border">
              <h3>{title}</h3>
              <p>{content}</p>
              <CustomButton
                text={button}
                color="#08B2E3"
                lightText
                href={buttonHref}
              />
            </div>
          </ScrollMove>
        </div>
      </div>
    )
})

