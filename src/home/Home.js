import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import side_img from "../img/Home-img.png";
import about_img from "../img/loutip.jpg"
import BottomPanel from "../common/panels/BottomPanel";
import faqimg from "../img/yamatai.jpg";
import tipImg2 from "../img/team2.png";
import tipImg1 from "../img/team.jpg";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import CustomButton from "../common/buttons/CustomButton";
import { cards } from "./infoCards";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

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
                  <h3>Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi.</h3>
                  <Button style={{ width: '8em' }} variant="outline-danger" size="lg">Learn More</Button>
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
      <div id="speakers-slide">
        <Container>
          <h1>Meet The Speakers</h1>
        </Container>
        <Row >
          <Carousel>
            <CarouselItem>
              <Container style={{ width: '80%' }}>
                <Row className="py-5">
                  <SpeakerInfo
                    speaker="Speaker 1"
                    info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    img={side_img}
                  ></SpeakerInfo>
                  <SpeakerInfo
                    speaker="Speaker 2"
                    info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    img={side_img}
                  ></SpeakerInfo>
                  <SpeakerInfo
                    speaker="Speaker 3"
                    info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    img={side_img}
                  ></SpeakerInfo>
                </Row>
              </Container>
            </CarouselItem>
            <CarouselItem>
              <Container style={{ width: '80%' }}>
                <Row className="py-5">
                  <SpeakerInfo
                    speaker="Speaker 1"
                    info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    img={side_img}
                  ></SpeakerInfo>
                  <SpeakerInfo
                    speaker="Speaker 2"
                    info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    img={side_img}
                  ></SpeakerInfo>
                  <SpeakerInfo
                    speaker="Speaker 3"
                    info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    img={side_img}
                  ></SpeakerInfo>
                </Row>
              </Container>
            </CarouselItem>
          </Carousel>
        </Row>
      </div>
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
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem.
                    </Card.Text>
                    <Button variant="danger">Go somewhere</Button>
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
              <div className="pt-4">
                <Button variant="outline-danger">Partner with TEDxCornell</Button>
              </div>
            </Col>
            <Col className="py-3">
              <h1>Want to learn more about TEDxCornell?</h1>
              <p className="py-3">Want to be up to date on current TEDxCornell
                news? Sign up here and we’ll send you exciting updates
                on the world of TEDxCornell. .</p>
              <p><b>Subscribe to get the latest TEDx news!</b></p>
              <div className="pt-4">
                <Button variant="outline-danger">Partner with TEDxCornell</Button>
              </div>
              <div className="pt-4">
                <Form.Control className="p" type="text" placeholder="Enter Email" />

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}