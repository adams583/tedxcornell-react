import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';


function Speaker(props) {
  return (
    <Col>
      <Image src={props.img} fluid></Image>
    </Col>
  );
}

function Info(props) {
  return (
    <Col className="col d-flex align-items-center text-light pt-4 pb-3">
      <Container>
        <Stack gap={1} className="my-auto">
          <h2>{props.speaker}</h2>
          <hr></hr>
          <p>{props.info}</p>
        </Stack>
      </Container>
    </Col>
  )
}

function SpeakerRow(props) {
  var first = <Speaker img={props.img} />
  var second = <Info speaker={props.speaker} info={props.info} />
  if(props.imageIsRight) {
    [first, second] = [second, first];
  }

  return (
    <Row style={{ backgroundColor: props.color }} className="justify-content-between">
      {first}
      {second}
    </Row>
  );
}

export default SpeakerRow