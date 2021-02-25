import React, { Component } from "react";
import "./Home.css";
import { Row, Col, Grid } from "react-bootstrap";

import ImageTextOverlap from "../common/ImageTextOverlap";
import itoImg from "../img/itai1.jpg";
import BottomPanel from "../common/panels/BottomPanel";
import faqimg from "../img/yamatai.jpg";
import tipImg2 from "../img/team2.png";
import tipImg1 from "../img/team.jpg";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import SplitPanel from "../common/panels/SplitPanel";
import CustomButton from "../common/buttons/CustomButton";
import ProfilePanel from "../common/info/ProfilePanel";
import teampng from "../img/team.png"

class Home extends Component {
  cards = [
    {
      title: "What is TEDxCornell?", 
      text: "We're a student-run club dedicated to bringing great independently-organized TED events and amazing people to Cornell. This year we're hosting two salon events and one main event. Be sure to follow us on social media and check our website for updates.",
      buttonText: "About Us", 
      link: "/about"
    },
    {
      title: "Our Conference",
      text:
        "TEDxCornell presents to you our 2019 conference as we hope to continue bringing “Ideas Worth Spreading” to Cornell’s campus. Six speakers from our local community and across the country shared the stage, each bringing light to a unique topic. Listen, learn, and be inspired. Experience TEDxCornell.",
      buttonText: "About the Event",
      link: "/events"
    },
    // {
    //   title: "Get Involved",
    //   text:
    //     "If you are passionate about TED or helping unique speakers share their ideas" +
    //     "consider getting invovled with TEDxCornell!",
    //   buttonText: "Apply Now",
    //   link: "/apply"
    // }
  ];

  render() {
    return (
      <div>
        <div className="main-panel-home-background ">
          {/* <div className="main-panel-home-content text-center">
            <div className="home-title">
              <div>
                <CustomButton
                  text="Register Now"
                  color="#e62b1e"
                  href="https://forms.gle/xUrUkuHH8sw4tpSWA"
                />
              </div>
            </div>
          </div> */}
          <div className="bottom-aligned-button-container">
            <div>
            <CustomButton
              lightText
              text="Register Now"
              color="#08b2e3"
              href="https://forms.gle/xUrUkuHH8sw4tpSWA"  
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
          {/* <ImageTextOverlap
            onImgLoad={() => {}}
            src={teampng}
            title="What is TEDxCornell?"
            content="We're a student-run club dedicated to bringing great independently-organized TED events and amazing people to Cornell."
            button="Learn More"
            buttonHref="/about"
          /> */}
          <Grid className="grid">
            {this.cards.map((card, index) => (
              <div key={index}>
                <Row>
                  {index % 2 != 0 && <Col md={7} />}
                  <Col md={5}>
                    <div>
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
                    </div>
                  </Col>
                  {index % 2 == 0 && <Col md={7} />}
                </Row>
                <div className="row-spacer" />
              </div>
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
      </div>
    );
  }
}

export default Home;