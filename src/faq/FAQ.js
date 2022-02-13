import React, { useState } from "react";
import "./FAQ.css";
import page_img from "../img/cornellfall2.png"
import ImageTextOverlay from "../common/ImageTextOverlay";
import InfoSection from "../faq/InfoSection"
import facts from "../faq/faq.json"

const FAQ = React.memo(function FAQFn() {

  return (
    <div>
      <ImageTextOverlay
        title="Frequently Asked Questions"
        body="Learn More About Our Events"
        img={page_img}
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
