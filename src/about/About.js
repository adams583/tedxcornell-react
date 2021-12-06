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
import { CarouselItem } from "react-bootstrap";

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
      title: 'Part 1',
      body: `(how uzair started)Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt.
                  Neque porro quisquam est.`
    },
    {
      title: 'Part 2',
      body: `(Adam and Kirk reviving the organization)Consequuntur 
      magni dolores eos qui ratione voluptatem sequi nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
       consectetur, adipisci velit, sed quia non numquam.
`
    }
  ]
}

const section2 = {
  title: {
    opening: "TED Talks",
    bold: "TED Story"
  },
  info: [
    {
      title: 'Lorem ipsum dolor',
      body: `Amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
       veniam, quis nostrud exercitation ullamco laboris nisi. Eos qui
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
         sed quia non numquam eius modi tempora.`
    },
  ]
}

function TeamCarousel(props) {
  let items = [];
  let groupingLength = 3;
  let width = '70%';
  for (var i = 0; i < props.team.length; i += groupingLength) {
    var group = props.team.slice(i, i + 3);
    var row = (<Row className="justify-content-evenly py-5">
      {group.map(member =>
        <div className="col-md-4 py-3">
          <Card bg='dark' text='light'>
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
    if (props.team.length <= groupingLength)
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

