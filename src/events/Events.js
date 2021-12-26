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
import speaker_info from "../events/speaker_info.json";

const pictures = [daniel_pic, marcela_pic, larry_pic, ishan_pic]
pictures.forEach((pic, i) => {
  speaker_info[i]["img"] = pic
}
)

function SpeakerCard() {
  const [open, setOpen] = useState(false);

  return (<Col className="" md={10} >
    <Row className="">
      <Col className="">
        <Row className=" text-white justify-content-center" >
          <Col md className="p-0">
            <Image fluid style={{ height: '100%' }} src={daniel_pic}></Image>
          </Col>
          <Col md={5} className="px-4 " style={{ backgroundColor: 'black' }}>
            <div className="py-5">
              <Stack className=" " gap={3}>
                <h1>Daniel James II</h1>
                <p>Podcast & Radio Host, Student Leader</p>
                <Button onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  variant="danger" >Learn More</Button>
              </Stack>
            </div>
          </Col>

        </Row>
      </Col>

      <Col md className='p-0'>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text " style={{ height: '100%' }}>
            <Card body className="text-center"style={{ width: '23em', height: '100%' }}>
              <Card.Title as="h1">
                Speech Title Here
              </Card.Title>
              <Card.Text as="p">
                Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est.
              </Card.Text>
            </Card>
          </div>
        </Collapse>

      </Col>
    </Row>
  </Col>);

}


class Events extends Component {

  render() {
    return (
      <div>
        <ImageTextOverlay
          title="Meet Our Speakers"
          body="Each of our events highlights the contributions, experiences,
           and ideas of our amazing speakers. Learn more about the speakers for our upcoming event!"
          img={page_img}
        >
        </ImageTextOverlay>
        <Container className="py-5">
          <SpeakerCard></SpeakerCard>
        </Container>
        {/* <Container fluid >
          {
            speaker_info.map((speaker, i) =>

              <SpeakerRow
                color={speaker.color}
                speaker={speaker.name}
                info={speaker.info}
                img={speaker.img}
                imageIsRight={(i % 2) == 1}
              ></SpeakerRow>
            )
          }
        </Container> */}
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
      </div>
    );
  }
}

export default Events;
