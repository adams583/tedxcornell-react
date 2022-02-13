import React, { Component, useState } from "react";
import "./Home.css";
import uproot from "../img/website-background.png"
import page_img from "../img/Tedx-Stage.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"
import "@fontsource/staatliches"
import "@fontsource/monoton"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faMicrophoneAlt, faUserFriends, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speaker_info from "../events/speakerInfo";
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import Form from "react-bootstrap/Form";
import about_img from "../img/loutip.jpg"



library.add(faMapMarkerAlt, faMicrophoneAlt, faUserFriends, faCalendarDay, faTwitter, faFacebook, faInstagram);




function MailingList() {
  const [inMailList, setInMailList] = useState(false)

  function handleSubmit() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec";
    const form = document.forms["home-submit-to-google-sheet"];
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function (response) {
        form.reset();
        console.log("Success!", response);
        setInMailList(true)
      })
      .catch(error => console.error("Error!", error.message));
  }

  return (<div>
    <div className="py-2">
      <Form 
        name="home-submit-to-google-sheet">
        <Form.Control className="p" name="email"
          type="text" placeholder="Enter Email" required />
      </Form>
    </div>
    <div className="py-2" id="join">
      {
        inMailList ?
          <div style={{ backgroundColor: 'green' }} className="text-white  w-25 rounded text-center">
            <h4 className="py-2">Joined!</h4>
          </div> :
          <Button variant="outline-danger" onClick={handleSubmit}>Join Mailing List</Button>
      }
    </div>
  </div>)
}


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
        <div className="py-2 px-3 rounded" style={{ backgroundColor: 'rgb(80, 80, 80, 0.6)' }} >
          <Stack>
            <h4>Event Date: April 16th, 2022</h4>
            <h4   >Speaker Line-Up and Ticket Registration Coming Soon!</h4>

          </Stack>

        </div>
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
        <div id="filler" className="py-4" style={{ backgroundColor: '	#282828	' }}></div>
        <div>
          <div style={{
            height: '30em', backgroundImage: `url(${about_img})`, backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }} className="d-flex align-items-center">
            <Container>
              <Row>
                <div class="col">
                  <Card style={{ width: '20rem', float: 'right' }}>
                    <Card.Body>
                      <Card.Title>About Us</Card.Title>
                      <Card.Text>
                        TEDxCornell is organized by a small group of dedicated students.
                        We handle all logistics of the event from speaker curation to
                        publicity. View our "Our Story" page to learn about our origins
                        and our current student team.
                      </Card.Text>
                      <Button variant="danger">Our Story</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <Container style={{ width: '95%' }} id="join-us-slide" className="py-5">
            <Row>
              <Col className="py-3">
                <h1>Partner with TEDxCornell</h1>
                <p className="py-3">When you support the TEDxCornell program, you enable
                  our efforts to empower and grow the global TEDx
                  community of volunteers.</p>
                <div className="py-2">
                  <h3>Our Email : <span style={{ color: 'red' }}><u>tedx@cornell.edu</u>  </span></h3>
                </div>
              </Col>
              <Col className="py-3">
                <h1>Want to learn more about TEDxCornell?</h1>
                <p className="py-3">Want to be up to date on current TEDxCornell
                  news? Sign up here and we’ll send you exciting updates
                  on the world of TEDxCornell. .</p>
                <p><b>Subscribe to get the latest TEDx news!</b></p>
                <MailingList></MailingList>
              </Col>
            </Row>
          </Container>
        </div>

      </div >
    );
  }
}

export default Events;
