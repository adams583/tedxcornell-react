import React, { useState } from "react";
import "./FAQ.css";
import speaker_img from "../img/chandler2.jpg"
import ImageTextOverlay from "../common/ImageTextOverlay";
import InfoSection from "../faq/InfoSection"
import facts from "../faq/faq.json"

const FAQ = React.memo(function FAQFn() {
  const imageStyle = {
    height: '30em'
  }
  var textStyle = {
    position: 'absolute',
    top: '35%',
    left: '10%',
    color: 'black',
    textShadow: '3px 2px white'
  };


  return (
    <div>
      <ImageTextOverlay
        title="Frequently Asked Questions"
        body="Learn More About Our Events"
        img={speaker_img}
        imageStyle={imageStyle}
        textStyle={textStyle}
      >
      </ImageTextOverlay>
      {facts.map(fact =>
        <InfoSection
          color={fact.color}
          title={fact.title}
          info={fact.info}
        >
        </InfoSection>
      )}
    </div>
  );
});

export default FAQ;
