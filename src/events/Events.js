import React, { Component } from "react";
import "./Events.css";
import Profile from "../common/profile/Profile";
import SplitPanel from "../common/panels/SplitPanel";
import eventsbg2 from "../img/events_bg1.jpg";
import eventsbg1 from "../img/jessenitai2.jpg";
import catjohnedit from "../img/catjohnedit.jpg";
import { speakers_2019 } from "../speakers/speaker-profiles";
import { Col } from "react-bootstrap";
import BottomPanel from "../common/panels/BottomPanel";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import CustomButton from "../common/buttons/CustomButton";
import bottomPanelImg from "../img/tickets_stock.jpg";
import tipImg2 from "../img/performers1.jpg";
import tipImg3 from "../img/loutip.jpg";
import tipImg1 from "../img/mason3.jpg";
import tipImg4 from "../img/chandler2.jpg";
import cat_pic from "../img/cat_hoke.jpg";
import john_pic from "../img/john_jackson.jpg";
import ProfilePanel from "../common/info/ProfilePanel";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSpeaker: ""
    };
  }

  toggleActiveSpeaker = e => {
    this.setState({
      activeSpeaker: e.currentTarget.dataset.name
    });
  };

  profiles = [
    {
      img: cat_pic,
      name: "Cat Hoke", 
      title: "Co-Founder, Hustle 2.0", 
      link: "https://www.cathoke.com/",
      blurb: "Over 17 years, Cat's efforts have led 7,000 executives, entrepreneurs, and investors to volunteer as mentors and employers for 8,500 formerly incarcerated program graduates. Her programs reduce violence and have produced leading recidivism rates of under 8%.",
      moreInfo: "As the only girl on the high school wrestling team and as a Brazilian jiu-jitsu fighter, Cat mastered the art of “breakfall”: how to prevent injury when you get taken down. Breakfall proved to be a transferable skill in her career as a three-time entrepreneur, disrupting the American prison industry. Cat works with gang leaders in the most notorious prisons, leading gang intervention programs. She has survived career-ending threats and devastating takedowns. Seth Godin published her best-selling book, A Second Chance: For You, For Me, and for the Rest of Us. Fast Company named Cat one of the 100 Most Creative People in Business, Forbes named her on 40 Women to Watch Over 40, and she has received the MDC Partners Humanitarian Award. "
    },
    {
      img: john_pic,
      name: "John Jackson", 
      title: "Director of Correctional Partnerships, Hustle 2.0", 
      link: "https://www.hustle20.com/team/",
      blurb: "John has co-authored nine books that provide holistic rehabilitation and healing for people in jails and prisons nationally. His curriculum is also used to tackle gang violence in America’s most dangerous prisons. ",
      moreInfo: "John was once labeled by correctional officials as being “the worst of the worst.” After being entrenched in gang culture and serving 18 years in prison, John realized that continuing to build his criminal resume would only lead him to life—and death—in prison. John made the dangerous decision to step away from gang and criminal activity while incarcerated. This led him to change his values, allegiances, and behavior. Because John made his choices honorably, he maintained his credibility with gang leaders and now works with them to stop the generational cycle of gang violence in prisons across the country. He uses his story of courage and transformation to create hope for a better future for those who have been labeled, written off, and forgotten by society."
    }
  ]

  experiences = {
    "An interactive experience":
      "Despite being through Zoom, Cat and John will lead us through an activity you can participate in from home with the rest of the audience.",
    "A short and sweet event":
      "Our March 7th salon will last around 1 hour, leaving us time afterwards for...",
    "Q&A with our speakers":
      "We are grateful to Cat and John for an amazing opportunity to join them for a Q&A session after their talk.",
    "Bonus":
      "For this event, we are giving out 30 free books to our first 30 registered attendees."
  };

  render() {
    return (
      <div>
        <div className="main-panel-events ">
          <SplitPanel img={catjohnedit} reverse={true} profile={false}>
            <div className="sp-content-container">
              <div className="sp-content">
                <h1>TEDxCornellSalon</h1>

                <p className="lead font-weight-normal">
                  <em>Uproot: A Virtual Series | No. 1 | 3.7.2021</em>
                  <br />
                  <b>Am I Enough?</b>
                </p>
                
                {/* <p className="lead font-weight-normal">
                  In our most ambitious conference to date, we brought speakers
                  from across the country and from our own Cornell community in
                  a one-of-a-kind event featuring talks and performances that
                  entertained, inspired, informed, and moved our audience. Thank
                  you to everyone who supported this year's event!
                </p> */}
                
                <p className="lead font-weight-normal">
                At our March 7th salon, we will be hosting Catherine Hoke and John Jackson as they share their stories and lead us through an intense emotional exercise in which you’ll evaluate your conformity, inner voice, purpose, expectations, and shame. Their talk is like a gut punch and a hug at the same time, pushing your boundaries on vulnerability, empathy, and honesty. This experience will give you a new perspective on how you talk to yourself and leave you feeling resilient, courageous, and connected.
                </p>
                <div className="a-container">
                <a href="https://forms.gle/xUrUkuHH8sw4tpSWA">
                  Register Now
                </a>
                </div>
              </div>
            </div>
          </SplitPanel>
        </div>

        <div id="about-event-panel">
          <h2>
          “You are not enough.” How many of us have experienced imposter syndrome? If you’re not enough, who is? 
          </h2>
          <p>
            At our first ever salon event, we explore our inner narratives. Cornell’s competitive environment attracts and breeds top students from around the country...but on the flipside, the intense pressure can also breed conformity, unrealistic expectations, secrecy, shame, and fear-based decision-making. The fear of disappointing others or “losing it all” can lead us to chase unfulfilling goals and miss our life purpose. 
          </p>
          <p>
            Join our TEDxCornell team as we host Cat Hoke and John jackson for a virtual experience you won't forget. As the first of three parts of our Uproot series this year, this salon will challenge us to think about how we can change the way we think about and speak to ourselves.
          </p>
        </div>

        <TwoImgPanel imgLeft={tipImg3} imgRight={tipImg2} />

        <div id="event-second-panel">
          <h1>Our first ever salon event</h1>
          <p>
            Besides our main conference, our TEDx license allows us to hold smaller, more focused and interactive events called salons. Here's what to expect:
          </p>
          <div className="experience-div">
            {Object.keys(this.experiences).map((key, index) => (
              <div key={index}>
                <div className="lined-item">
                  <div className="lined-item-title">
                    <i className="fa fa-check" aria-hidden="true" /> &emsp;{" "}
                    {key}
                  </div>
                  <div className="lined-item-content md-screen-only">
                    {this.experiences[key]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <TwoImgPanel imgLeft={tipImg1} imgRight={tipImg4} />
        <div className="events-content">
          <div className="speakers-title-div">
            <h1>Our Speakers</h1>
          </div>
              
          {this.profiles.map((profile, idx) => (
            <div key={idx} className="profile-panel-container">            
              <ProfilePanel profile={profile} reversed={idx % 2}></ProfilePanel>
            </div>
          ))}


          {/* Speakers Rendering */}
          {/* <div className="container speakers-container">
            <Col xs={12} sm={6} md={4} lg={4} xl={4} className="speaker-div">
              <h2>Our Lineup</h2>
              <p>
                On April 28, 2019 we heard from an incredible lineup of speakers
                and performers from a wide range of disciplines.
              </p>
            </Col>
            {Object.keys(speakers_2019).map((key, index) => (
              <a
                key={index}
                href={`/speakers/${speakers_2019[key].url}`}
                className="plain-a"
              >
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  key={key.index}
                  data-name={speakers_2019[key].name}
                  onClick={this.toggleActiveSpeaker}
                >
                  <div>
                    <Profile
                      src={speakers_2019[key].img}
                      title={speakers_2019[key].title}
                      name={speakers_2019[key].name}
                      url={`/speakers/${speakers_2019[key].url}`}
                    />
                  </div>
                </Col>
              </a>
            ))}
          </div> */}
        </div>
        <BottomPanel
          img={bottomPanelImg}
          title="Reserve Your Spot"
          txt="Reserve your virtual seat for our salon on March 7th, 2021 to experience our event. We hope to see you there!"
          button="Register Now"
          buttonHref="https://forms.gle/xUrUkuHH8sw4tpSWA"
        />
      </div>
    );
  }
}

export default Events;
