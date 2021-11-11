import React from "react"



function InfoSection(props) {

  return (<div className="border info-card" style={{ height: '100%', backgroundColor: props.color }}>
    <div className="mx-auto my-5" style={{ width: '90%' }}>
      <h1>{props.title}</h1>
      <hr size="7"></hr>
      {props.info.map(infoItem =>
        <div className="my-5 question-answer">
          <h4>{infoItem.question}</h4>
          <p>{infoItem.answer}</p>
        </div>
      )}
    </div>
  </div>);
}

export default InfoSection