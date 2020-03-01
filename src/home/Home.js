import React, { Component } from "react";
import "./Home.css";
import { Row, Col, Grid } from "react-bootstrap";

import ImageTextOverlap from "../common/ImageTextOverlap";
import itoImg from "../img/itai1.jpg";
import BottomPanel from "../common/panels/BottomPanel";
import faqimg from "../img/yamatai.jpg";
import tipImg2 from "../img/jessenitai2.jpg";
import tipImg1 from "../img/jessencolin.jpg";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import SplitPanel from "../common/panels/SplitPanel";
import CustomButton from "../common/buttons/CustomButton";
import VideoContainer from "../common/videoDisplay/VideoContainer";

class Home extends Component {
  cards = [
    {
      title: "Get Involved",
      text:
        "Interested in getting involved on the speaking or" +
        "organizing side? Speaker applications a now open! Anyone" +
        "with a great idea for a talk can apply to be a speaker. If" +
        "you're looking to become a part of our organizing team," +
        "check back next semester for details.",
      buttonText: "Apply Now",
      link: "/apply"
    },
    {
      title: "Our Conference",
      text:
        "TEDxCornell presents to you our 2019 conference as we hope to continue bringing “Ideas Worth Spreading” to Cornell’s campus. Six speakers from our local community and across the country shared the stage, each bringing light to a unique topic. Listen, learn, and be inspired. Experience TEDxCornell.",
      buttonText: "About the Event",
      link: "/events"
    }
  ];

  render() {
    return (
      <div>
        <div className="main-panel-home-background ">
          <div className="main-panel-home-content text-center">
            <div className="home-title">
              <strong>
                <h1>TEDxCornell</h1>
              </strong>
              <p className="lead font-weight-normal">
                Our 2020 event is coming soon! Learn more about past events
                below.
              </p>
              <div>
                <CustomButton
                  text="Learn More"
                  color="#e62b1e"
                  href="/events"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-home-panel">
          <h2>
            <em>
              “We are all trapped inside our own heads. And our beliefs and
              understandings about the world are limited by that perspective.”
            </em>{" "}
            &nbsp;- Derren Brown
          </h2>
          <p>
            Change is now faster than ever. In order to adapt to and understand
            the world we live in, we're having to look at problems in new ways,
            shift our perspectives, and search for answers where we never have
            before.
          </p>
          <p>
            At TEDxCornell 2019, Reframe, we thank all who joined us in thinking
            more deeply about ourselves, our communities, and the future that
            lies ahead of us.
          </p>
        </div>

        <div class="videos-title"> 
          <h3>Check out some of our popular videos!</h3> 
        </div>
        <div class ="ribbon"> </div>

        <VideoContainer />

        <TwoImgPanel imgLeft={tipImg1} imgRight={tipImg2} />

        <div className="home-content">
          <ImageTextOverlap
            onImgLoad={() => {}}
            src={itoImg}
            title="What is TEDxCornell?"
            content="We're a student-run club dedicated to bringing great independently-organized TED events and amazing people to Cornell."
            button="Learn More"
            buttonHref="/about"
          />
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
                          color="#e62b1e"
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
