import React, { useState } from "react";
import "./FAQ.css";
import { PanelGroup } from "react-bootstrap";
import Collapsible from "../common/collapsible/Collapsible.js";
import CardSelector from "./CardSelector";
import { FAQ_INFO } from "./faqInfo";
import classNames from "classnames";

const FAQ = React.memo(function FAQFn() {
  const faqCategoryIds = Object.keys(FAQ_INFO);
  const [category, setCategory] = useState(faqCategoryIds[0]);

  return (
    <div className="faq">
      <div>
        <h4>Learn more about us and our event</h4>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-content">
        <div className="faq-selector-container">
          {faqCategoryIds.map((categoryId) => {
            const { title, text } = FAQ_INFO[categoryId].selectorInfo;
            return (
              <CardSelector
                onClick={() => setCategory(categoryId)}
                title={title}
                text={text}
                selected={category === categoryId}
              />
            );
          })}
          <div className={classNames("other-card", "large-screen-only")}>
            <h5>Anything else?</h5>
            <p>
              Feel free to email us anytime with any other questions at &nbsp;
              <span className="text-accent">tedx@cornell.edu</span>
            </p>
          </div>
        </div>
        <PanelGroup
          accordion
          className="faq-questions-container"
          id="faq-panel-group"
        >
          {FAQ_INFO[category].faq.map(({ question, answer }, idx) => (
            // Idx not a unique key by itself since we potentially render 3 lists.
            <Collapsible key={`${category}-${idx}`} title={question}>
              <div>{answer}</div>
            </Collapsible>
          ))}
        </PanelGroup>
      </div>
    </div>
  );
});

export default FAQ;
