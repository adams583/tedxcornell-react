import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import side_img from "../img/Home-img.png";
import BottomPanel from "../common/panels/BottomPanel";
import faqimg from "../img/yamatai.jpg";
import tipImg2 from "../img/team2.png";
import tipImg1 from "../img/team.jpg";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import CustomButton from "../common/buttons/CustomButton";
import { cards } from "./infoCards";

export default function Home() {

  return (
    <div>
      <Container fluid>
        <div style={{}} className="embed-responsive embed-responsive-16by9">
          <iframe style={{}}
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/LOB4eCzoOJ8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </Container>
      <div id="new-info-slide">
        <Container >
          <Row >
            <Col className="col-md-7" >
              <Row className="py-5">
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
    </div>
  );
}