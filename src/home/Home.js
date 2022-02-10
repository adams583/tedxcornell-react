import React from "react";
import "./Home.css";
import { Row, Col, Container } from "react-bootstrap";
import BottomPanel from "../common/panels/BottomPanel";
import faqimg from "../img/yamatai.jpg";
import tipImg2 from "../img/team2.png";
import tipImg1 from "../img/team.jpg";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import CustomButton from "../common/buttons/CustomButton";
import { cards } from "./infoCards";

export default function Home() {

  return (
    <React.Fragment>
      <div className="main-panel-home-background ">
        <div className="main-panel-home-content text-center">
          <div className="home-title">
          </div>
        </div>
      </div>

      <TwoImgPanel imgLeft={tipImg1} imgRight={tipImg2} />

      <div className="home-content">
        <Container className="grid">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Row>
                {index % 2 !== 0 && <Col md={7} />}
                <Col md={5}>
                  <div data-aos="fade-left" className="paper-div">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <CustomButton
                      text={card.buttonText}
                      color="#08b2e3"
                      lightText
                      href={card.link}
                    />
                  </div>
                </Col>
                {index % 2 === 0 && <Col md={7} />}
              </Row>
              <div className="row-spacer" />
            </React.Fragment>
          ))}
        </Container>

        <BottomPanel
          img={faqimg}
          title="Any Questions?"
          txt="Have any questions? Visit our FAQs page or get in touch with us to ask about anything. We'd love to hear from you"
          button="See FAQs"
          buttonHref="/faq"
        />
      </div>
    </React.Fragment>
  );
}