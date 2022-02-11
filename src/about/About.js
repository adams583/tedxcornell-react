import React from "react";
import "./About.css";
import ImageTextOverlay from "../common/ImageTextOverlay";
import about_header from "../img/About-img.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { team2022 } from "./members";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

const sub_teams = ["Design", "Finance", "Marketing",
  "Speaker Curation", "Web Dev"];

function AboutSection(props) {
  return (
    <div>
      <div>
        <h1>{props.title.opening}: <span style={{ color: 'red' }}><b> {props.title.bold}</b></span></h1>
      </div>
      <div>
        {props.info.map(info =>
          <div className="py-3">
            <h2><b>{info.title}</b></h2>
            <p className="info-body pt-3">
              {info.body}
            </p>
          </div>
        )}
      </div>
    </div>);
}

const section1 = {
  title: {
    opening: "TEDxCornell",
    bold: "Our Story"
  },
  info: [
    {
      title: 'Our Founders',
      body: `In 2017, our group's fouder Kirkland Sugrim and Adam Skrocki
      wanted to bring something special to Cornell. There words to each other one
      day: 
      “Dude we have to do something incredible in our time here. 
      What if we organized TED talks here at Cornell for the students body?”
      That single moment defined four years of time for Adam and Kirk.
      Through the help of Eri Kato, Emily Chen, and Uzair Butt, 
      they worked hard to bring speakers from around the world to share 
      their ideas to inspire novel conversations and actions within 
      and beyond our Cornell community.`
    },
  ]
}

const section2 = {
  title: {
    opening: "TED Talks",
    bold: "TED Story"
  },
  info: [
    {
      title: 'History of TED',
      body: `TED was born in 1984 out of Richard Saul Wurman's observation of 
      a powerful convergence among three fields: technology, entertainment 
      and design. The first TED, which he co-founded with Harry Marks, 
      included a demo of the compact disc, the e-book and cutting-edge 
      3D graphics from Lucasfilm, while mathematician Benoit Mandelbrot 
      demonstrated how to map coastlines using his developing theory of 
      fractal geometry.

    But despite a stellar lineup, the event lost money, and it was six years
     before Wurman and Marks tried again. This time, in 1990, the world was ready.
      The TED Conference became an annual event in Monterey, California,
       attracting a growing and influential audience from many different 
       disciplines united by their curiosity and open-mindedness -- and 
       also by their shared discovery of an exciting secret.`
    },
  ]
}

function TeamCarousel(props) {
  let items = [];
  let maxGroupingLength = 3;
  let groupingLength = props.team.length === 4 ? 2 : maxGroupingLength
  let width = '70%';
  for (var i = 0; i < props.team.length; i += groupingLength) {
    var group = props.team.slice(i, i + groupingLength);
    var row = (<Row className="justify-content-evenly py-5">
      {group.map(member =>
        <div className="col-md-4 py-3 d-flex justify-content-center">
          <Card bg='dark' text='light' >
            <Card.Img variant="top" style={{ height: '15em' }} src={member.img} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Text>
                {member.info}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </Row>);

    // If less members than grouping length, we don't want a carousel 
    if (props.team.length <= maxGroupingLength)
      return <Container style={{ width: width }}>{row}</Container>;

    var item = (
      <CarouselItem>
        <Container style={{ width: width }}>
          {row}
        </Container>
      </CarouselItem>
    )
    items.push(item);
  }

  return (
    <Carousel>
      {items}
    </Carousel>
  )
}

function Team(props) {
  return (
    <div>
      <Container fluid>
        <Row className="">
          <div style={{ backgroundColor: "black", color: 'white' }}
            className="col-md-5 col-6 py-3 d-flex align-items-center text-center">
            <h1 className="px-3">{props.teamName}</h1>
          </div>
          <div className="col arrow-right">
          </div>
        </Row>
      </Container>
      <TeamCarousel team={props.team}>
      </TeamCarousel>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <ImageTextOverlay
        img={about_header}
      >
      </ImageTextOverlay>
      <div>
        <Container fluid className="py-5 ">
          <Row className="justify-content-around">
            <Col className="col-md-5">
              <AboutSection
                {...section1}>
              </AboutSection>
            </Col>
            <Col className="col-md-5">
              <AboutSection
                {...section2}>
              </AboutSection>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: 'lightgray' }}>
        {sub_teams.map(sub_team =>
          <Team
            teamName={sub_team}
            team={team2022.filter(member => {
              return member.sub_teams.includes(sub_team)
            })}
          >
          </Team>
        )}
      </div>

    </div>
  )
}

