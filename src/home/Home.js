import React from "react";
import "./Home.css";
import { Row, Col, Grid } from "react-bootstrap";
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
                <CustomButton
                  lightText
                  text="Apply For Our Organizing Team"
                  color="#08b2e3"
                  href="https://forms.gle/sjUFzXd5GwxC6WDGA"
                />
            </div>
          </div>
        </div>

        <div id="about-home-panel">
          <div className="about-home-panel-title">
              Uproot: A Virtual Series
          </div>
          <div className="about-home-panel-desc">
            This year we are hosting a three-part virtual series with the theme Uproot. Join us for two salon events and one main event in which we bring speakers from around the country as well as our local community to share their most pressing ideas.
            What does the theme Uproot mean to you? To us it's challenging the beliefs we've been rooted in our whole lives, starting fresh, exploring change. To uplift, shake off the dirt, and rebuild. 
          </div>
        </div>

        <TwoImgPanel imgLeft={tipImg1} imgRight={tipImg2} />

        <div className="home-content">
          <Grid className="grid">
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
          </Grid>

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