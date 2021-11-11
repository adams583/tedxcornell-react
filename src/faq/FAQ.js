import React, { useState } from "react";
import "./FAQ.css";
import { Accordion } from "react-bootstrap";
import Collapsible from "../common/collapsible/Collapsible.js";
import CardSelector from "./CardSelector";
import { FAQ_INFO } from "./faqInfo";
import classNames from "classnames";
import speaker_img from "../img/chandler2.jpg"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import InfoSection from "../faq/InfoSection"
import facts from "../faq/faq.json"

const FAQ = React.memo(function FAQFn() {
  console.log(facts)
  const faqCategoryIds = Object.keys(FAQ_INFO);
  const [category, setCategory] = useState(faqCategoryIds[0]);
  const imageStyle = {
    height: '30em', display: 'flex',

  }
  var textStyle = {
    position: 'absolute',
    top: '35%',
    left: '10%',
    color: 'black',
    textShadow: '3px 2px white'
  };

  const infoTest = [{ 'question': "Can I help organize the event?", 'answer': 'Our team is fully staffed' }]

  return (
    <div>
      <div className="" style={imageStyle} >
        <Image fluid className="" src={speaker_img} style={{ width: '100%' }}>
        </Image>
        <div style={textStyle}>
          <h1 style={{ fontSize: '60px' }}>Frequently Asked Questions</h1>
          <h3 style={{ fontSize: '40px' }}>Learn More About Our Events</h3>
        </div>
      </div>
      {/* <div className="border info-card" style={{ height: '100%', backgroundColor: '#f5e2dc' }}>
        <div className="mx-auto my-5" style={{ width: '90%' }}>
          <h1>Our Events</h1>
          <hr size="7"></hr>
          <div className="my-5 question-answer">
            <h4>Can I help organize the event?</h4>
            <p>Our team is fully staffed.</p>
          </div>
          <div className="my-5 question-answer">
            <h4>Can I help organize the event?</h4>
            <p>Our team is fully staffed.</p>
          </div>
        </div>
      </div> */}
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
