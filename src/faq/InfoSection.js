import React from "react"
import Accordian from "react-bootstrap/Accordion";



function InfoSection(props) {

  return (<div className="border info-card" style={{ height: '100%', backgroundColor: props.color }}>
    <Accordian className="mx-auto my-5" style={{ width: '90%' }}>
      <Accordian.Button className = "info-header" style = {{backgroundColor: 'transparent'}}><p>{props.title}</p></Accordian.Button>
      <hr size="7"></hr>
      <Accordian.Body>
      {props.info.map(infoItem =>
        <div className="my-4 question-answer">
          <h4>{infoItem.question}</h4>
          <p>{infoItem.answer}</p>
        </div>
      )}
      </Accordian.Body>
    </Accordian>
  </div>);
}

export default InfoSection