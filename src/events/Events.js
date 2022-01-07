import React, { Component, useState } from "react";
import "./Events.css";
import marcela_pic from "../img/marcela.jpg";
import daniel_pic from "../img/daniel_pic.jpg";
import larry_pic from "../img/larry_pic.jpg";
import ishan_pic from "../img/ishan.jpg";
import bruce_pic from "../img/bruce.jpg"
import jonathan_pic from "../img/jonathan.jpg"
import cat_pic from "../img/cat.jpg";
import john_pic from "../img/john.jpg";
import ImageTextOverlay from "../common/ImageTextOverlay";
import uproot from "../img/website-background.png"
import page_img from "../img/team2019.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"
import Collapse from 'react-bootstrap/Collapse'

import SpeakerRow from "./SpeakerRow";
import speaker_info from "./speakerInfo";

// const pictures = [daniel_pic, marcela_pic, larry_pic, ishan_pic]
// pictures.forEach((pic, i) => {
//   speaker_info[i]["img"] = pic
// }
// )

function Countdown() {
  const [countDown, setCountDown] = React.useState(0);
  const [runTimer, setRunTimer] = React.useState(true);
  const currentDate = new Date();
  const eventDate = new Date("4/16/2022")

  function getTimeDiff() {
    const diffInMs = eventDate - currentDate;
    console.log(diffInMs / 1000);

    return Math.floor(diffInMs / 1000);
  }

  React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(getTimeDiff());
      timerId = setInterval(() => {

        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  // const togglerTimer = () => setRunTimer((t) => !t);
  function getSeconds() {
    return countDown % 60;
  }
  function getMinutes() {
    return Math.floor(countDown / 60) % 60
  }

  function getHours() {
    return Math.floor(countDown / (60 * 60)) % 24
  }

  function getDays() {
    return Math.floor(countDown / (60 * 60 * 24))
  }

  function convertToString(timeValue) {
    return String(timeValue).padStart(2, 0);
  }

  const seconds = convertToString(getSeconds())
  const minutes = convertToString(getMinutes())
  const hours = convertToString(getHours())
  const days = convertToString(getDays())
  return (
    <div className="text-center countdown">
      <Stack>
        <h1>
          {days} : {hours} : {minutes} : {seconds}
        </h1>
        <h4>Days : Hours : Min : Sec</h4>
      </Stack>
    </div>
  );
}



function SpeakerCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <Row className={"py-4 " + (props.onRight ? "flex-row-reverse" : '')}>
      <Col md={11} >
        <Row className={props.onRight ? "flex-row-reverse" : ''}>
          <Col>
            <Row className=" text-white justify-content-center " >
              <Col md className="p-0">
                <Image fluid style={{ height: '100%' }} src={props.img}></Image>
              </Col>
              <Col md={5} className="px-4 text-white justify-content-center" style={{ backgroundColor: 'black' }}>
                <div className="py-5">
                  <Stack gap={3}>
                    <h1>{props.name}</h1>
                    <p>{props.info}</p>
                    <Button onClick={() => setOpen(!open)}
                      aria-controls="card-collapse-text"
                      aria-expanded={open}
                      variant="danger" >Learn More</Button>
                  </Stack>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md className={'p-0 ' + (props.onRight ? "d-flex align-items-end  flex-column" : 'd-flex align-items-begin flex-column')}>
            <Collapse style={{ height: '100%' }} in={open} dimension="width">
              <div id="card-collapse-text " style={{ height: '100%' }}>
                <Card body className="text-center" style={{ width: '35em', height: '100%' }}>
                  <Card.Title as="h4">
                    <u>{props.speech}</u>
                  </Card.Title>
                  <Card.Text as="p" className="speech-info">
                    {props.speechInfo}
                  </Card.Text>
                </Card>
              </div>
            </Collapse>
          </Col>
        </Row>
      </Col>
    </Row>
  );

}


class Events extends Component {

  render() {
    return (
      <div>
        {/* <ImageTextOverlay
          title="Meet Our Speakers"
          body="Each of our events highlights the contributions, experiences,
           and ideas of our amazing speakers. Learn more about the speakers for our upcoming event!"
          img={page_img}
        >
        </ImageTextOverlay> */}
        <div style={{
          height: '30em', backgroundImage: `url(${page_img})`, backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} className="d-flex align-items-center">
          <Container className="d-flex align-items-center text-white">
            <div className="mx-auto">
              <Countdown ></Countdown>
            </div>
          </Container>
        </div>
        <Container className="py-3">
          <div className="text-center py-4">
            <span className="p-3" id="year"><u>2020 Speakers</u></span>
          </div>
        </Container>
        <Container fluid className="event-info">
          <Row className="justify-content-center">
            <Col md={5} className="py-4 pr-4 border">
              <Stack>
                <h1>2022: <span id="event-name"><u>UnMuted</u></span></h1>
                <h4><span style={{ color: 'red' }}><b>TEDx</b></span>Cornell</h4>
              </Stack>
            </Col>
            <Col className="border" md={6}>
              <Image fluid src={uproot}></Image>
            </Col>
          </Row>
        </Container>
        <Container className="py-3">
          {speaker_info.map((speaker, i) =>
            <SpeakerCard {...speaker} onRight={i % 2 != 0}></SpeakerCard>
          )}
        </Container>
        <div className="text-white" style={{ backgroundColor: "red", height: "100%" }}>
          <div className="container">
            <div className="row py-3">
              <div className="col-md-10 d-flex align-items-center">
                <h3 className="">Do you want to be a speaker for a future event? Apply here:</h3>
              </div>
              <div className="col d-flex align-items-center">
                <Button size='lg' variant="secondary" style={{ width: '100%' }}>Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Events;
