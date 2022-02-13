import React from "react";
import "./Events.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import side_img from "../img/Home-img.png";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import speaker_info from "./speakerInfo";
import uproot from "../img/website-background.png"



function SpeakerInfo(props) {
  return (<Col md className="py-3">
    <Stack gap={4}>
      <Image roundedCircle fluid src={props.img} style={{ width: '7em', height: '7em' }}></Image>
      <h4><b>{props.speaker}</b></h4>
      <p>
        {props.info}
      </p>
      <Button variant="outline-danger" style={{ width: '8em' }}>Learn More</Button>
    </Stack>
  </Col>)
}

function SpeakerCarousel(props) {

  var items = []
  for (var i = 0; i < props.speaker_info.length; i += 3) {
    var group = props.speaker_info.slice(i, i + 3);
    var item = (
      <CarouselItem>
        <Container style={{ width: '80%' }}>
          <Row>
            {group.map(speaker =>
              <SpeakerInfo speaker={speaker.name} info={speaker.summary} img={speaker.img}>
              </SpeakerInfo>
            )}
          </Row>
        </Container>
      </CarouselItem>);
    items.push(item)
  }

  return (<Carousel className="py-3">
    {items}
  </Carousel>)
}

export default function Home() {

  return (
    <div>
      <div style={{}} className="embed-responsive embed-responsive-16by9">
        <iframe style={{ width: '100%', height: '46rem' }}
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/N-l1xtCMnpw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div id="new-info-slide">
        <Container >
          <Row className="py-5">
            <Col className="col-md-7" >
              <Row >
                <h1>Introducing: </h1>
                <h1><span>TEDx</span>Cornell Virtual Salon Series</h1>
              </Row>
              <Row className="py-5">
                <Stack gap={3}>
                  <h3><b>How COVID-19 impacted our events</b></h3>
                  <h3>During the '20-'21 school year, the TEDxCornell team
                    shifted to a series of virtual events instead of our
                    usual singular main event. The virtual series included
                    two Salon events which were smaller but more interactive,
                    discussion-based events
                    The virtual format allowed for participants to ask
                    our speakers questions and engage with their talks
                    through different activities. The series was concluded
                    by a virtual main event.</h3>
                  {/* <Button style={{ width: '8em' }} variant="outline-danger" size="lg">Learn More</Button> */}
                </Stack>
              </Row>
            </Col>
            <Col md>
              <Image fluid src={side_img}>
              </Image>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div id="speakers-slide">
        <Container>
          <h1>Meet The Speakers</h1>
        </Container>
        <Row >
          <SpeakerCarousel speaker_info={speaker_info}>
          </SpeakerCarousel>
        </Row>
      </div> */}
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
    </div>
  );
}