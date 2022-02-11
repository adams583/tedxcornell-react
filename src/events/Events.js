import React, { Component, useState } from "react";
import "./Events.css";
import uproot from "../img/website-background.png"
import page_img from "../img/Tedx-Stage.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"
import Collapse from 'react-bootstrap/Collapse'
import "@fontsource/staatliches"
import "@fontsource/monoton"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faMicrophoneAlt, faUserFriends, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpeakerRow from "./SpeakerRow";
import speaker_info from "./speakerInfo";
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';

library.add(faMapMarkerAlt, faMicrophoneAlt, faUserFriends, faCalendarDay, faTwitter, faFacebook, faInstagram);


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
        <h4><u>Our 2022 Event</u></h4>
        <h1 style={{ fontFamily: 'Monoton' }}>UnMuted</h1>
        <Swing delay={1500}>
          <h1>
            {days} : {hours} : {minutes} : {seconds}
          </h1>
        </Swing>
        <h4>Days : Hours : Min : Sec</h4>
        <h4 className="py-2 px-3 rounded" style={{ backgroundColor:'rgb(80, 80, 80, 0.5)'}} >Our event is April 16th, we will release our speaker line up and registration soon!</h4>
        {/* <Button variant="danger" className="align-self-center" >Register!</Button> */}
      </Stack>
    </div>
  );
}



function SpeakerCard(props) {
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
                    <div className="text-center py-3 rounded" style={{ backgroundColor: "DimGray" }}>

                      <h5><u>Follow This Speaker</u></h5>
                      <div className="d-flex justify-content-center pt-3">
                        {
                          props.socials ? props.socials.map(social =>
                            <a className="px-3" href="/"><FontAwesomeIcon style={{ fontSize: '30px', color: 'red' }} icon={['fab', social]} /></a>
                          ) : <></>
                        }
                      </div>
                    </div>
                  </Stack>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md className='p-0 '>
            <div className={'h-100 ' + (props.onRight ? "d-flex align-items-end  flex-column" : 'd-flex align-items-begin flex-column')}>
              <div style={{ height: '100%' }}>
                <Card body className="text-center" style={{ width: '35em', height: '100%' }}>
                  <Card.Title as="h4">
                    <u>{props.speech}</u>
                  </Card.Title>
                  <Card.Text as="p" className="speech-info">
                    {props.speechInfo}
                  </Card.Text>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

}

const infoBars = [
  {
    info: 'Kennedy Hall',
    subInfo: 'Cornell University',
    fa: 'map-marker-alt',
    colSize: '2'
  },
  {
    info: '8 Speakers',
    subInfo: 'Variety of Topics',
    fa: 'microphone-alt',
    colSize: '2'
  },
  {
    info: 'April 16th',
    subInfo: 'Save the Date',
    fa: 'calendar-day',
    colSize: '2'
  },
  {
    info: '700+ Seating',
    subInfo: 'Register Now!',
    fa: 'user-friends',
    colSize: '3'
  }
]


class Events extends Component {

  render() {
    return (
      <div>
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
        <div id="body">
          <div className="event-info" >
            <Row className="justify-content-around pb-5" style={{ width: '100%' }}>
              <Col md={6} className="pt-4 px-5 d-flex align-items-center py-3">
                <Stack gap={2} className=" d-flex align-items-center text-center">
                  <h1> <span id="event-name">UnMuted</span></h1>
                  <h4>2022 <span style={{ color: 'red', fontSize: '20px' }}><b>TEDx</b></span>Cornell</h4>
                  <p>Come join us for our 2022 Event on April 16th at Kennedy Hall.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est.Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est.
                  </p>
                  <Button variant='outline-danger'>Register Now!</Button>
                </Stack>
              </Col>
              <Col >
                <Image fluid src={uproot}></Image>
              </Col>
            </Row>

          </div>
          <Container style={{ backgroundColor: 'ghostwhite' }} id="overlay">
            <Row className="px-3 py-3 justify-content-around">
              {
                infoBars.map((bar, i) =>

                  <Col className={"py-1 col-md-" + bar.colSize}>
                    <Fade top delay={500 + i * 500}>
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon style={{ fontSize: '45px', color: 'red' }} icon={['fas', bar.fa]}></FontAwesomeIcon>
                        <Stack gap={0} className="text-center ">
                          <h4>{bar.info}</h4>
                          <h6>{bar.subInfo}</h6>
                        </Stack>
                      </div>
                    </Fade>
                  </Col>
                )
              }
            </Row>
          </Container>
          <Container className="py-3">
            {speaker_info.map((speaker, i) =>
              <Fade top delay={i == 0 ? 1000 : 0}>
                <SpeakerCard {...speaker} onRight={i % 2 != 0}></SpeakerCard>
              </Fade>

            )}
          </Container>
        </div>
        <div id="past-section" className="py-5">
          <Container className="py-3">
            <h1>Past Events</h1>
            <Row className="pt-4">
              <Col md={4}>
                <a href="/2021" style={{ textDecoration: 'none', color: 'white' }}>
                  <Card>
                    <Card.Header as="p" className="event-date">May 7th 2021</Card.Header>
                    <Card.Img src={uproot}></Card.Img>
                    <Card.Body>
                      <Card.Title as="h4"><b>Uproot</b></Card.Title>
                      <Card.Text as="p">2021 <span style={{ color: 'red' }}><b>TEDx</b></span>Cornell</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-white" style={{ backgroundColor: "red", height: "100%" }}>
          <div className="container">
            <div className="row py-3">
              <div className="col-md-10 d-flex align-items-center">
                <h3 className="">Do you want to be a speaker for a future event? Apply here:</h3>
              </div>
              <div className="col d-flex align-items-center">
                <a href="/apply" className=" w-100 "><Button size='lg' variant="secondary" style={{ width: '100%' }}>Apply</Button></a>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Events;
