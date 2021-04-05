import React, { Component } from "react";
import "./Events.css";
import Profile from "../common/profile/Profile";
import SplitPanel from "../common/panels/SplitPanel";
import catjohnedit from "../img/catjohnedit.jpg";
import BottomPanel from "../common/panels/BottomPanel";
import TwoImgPanel from "../common/panels/TwoImgPanel";
import bottomPanelImg from "../img/tickets_stock.jpg";
import tipImg2 from "../img/performers1.jpg";
import tipImg3 from "../img/loutip.jpg";
import tipImg1 from "../img/mason3.jpg";
import tipImg4 from "../img/chandler2.jpg";
import bruce_pic from "../img/bruce.jpg"
import jonathan_pic from "../img/jonathan.jpg"
// import cat_pic from "../img/cat_hoke.jpg";
// import john_pic from "../img/john_jackson.jpg";
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
    // {
    //   img: cat_pic,
    //   name: "Cat Hoke", 
    //   title: "Co-Founder, Hustle 2.0", 
    //   link: "https://www.cathoke.com/",
    //   blurb: "Over 17 years, Cat's efforts have led 7,000 executives, entrepreneurs, and investors to volunteer as mentors and employers for 8,500 formerly incarcerated program graduates. Her programs reduce violence and have produced leading recidivism rates of under 8%.",
    //   moreInfo: "As the only girl on the high school wrestling team and as a Brazilian jiu-jitsu fighter, Cat mastered the art of “breakfall”: how to prevent injury when you get taken down. Breakfall proved to be a transferable skill in her career as a three-time entrepreneur, disrupting the American prison industry. Cat works with gang leaders in the most notorious prisons, leading gang intervention programs. She has survived career-ending threats and devastating takedowns. Seth Godin published her best-selling book, A Second Chance: For You, For Me, and for the Rest of Us. Fast Company named Cat one of the 100 Most Creative People in Business, Forbes named her on 40 Women to Watch Over 40, and she has received the MDC Partners Humanitarian Award. "
    // },
    // {
    //   img: john_pic,
    //   name: "John Jackson", 
    //   title: "Director of Correctional Partnerships, Hustle 2.0", 
    //   link: "https://www.hustle20.com/team/",
    //   blurb: "John has co-authored nine books that provide holistic rehabilitation and healing for people in jails and prisons nationally. His curriculum is also used to tackle gang violence in America’s most dangerous prisons. ",
    //   moreInfo: "John was once labeled by correctional officials as being “the worst of the worst.” After being entrenched in gang culture and serving 18 years in prison, John realized that continuing to build his criminal resume would only lead him to life—and death—in prison. John made the dangerous decision to step away from gang and criminal activity while incarcerated. This led him to change his values, allegiances, and behavior. Because John made his choices honorably, he maintained his credibility with gang leaders and now works with them to stop the generational cycle of gang violence in prisons across the country. He uses his story of courage and transformation to create hope for a better future for those who have been labeled, written off, and forgotten by society."
    // }
    {
      img: jonathan_pic,
      name: "Jonathan Javier", 
      title: "CEO/Founder of Wonsulting", 
      link: "https://www.forbes.com/sites/danabrownlee/2021/02/07/how-this-millennial-skipped-applications-landed-his-dream-tech-job-using-social-media/?ss=careers&sh=77c8c66a2f6b",
      blurb: "Jonathan Javier is the CEO and founder of Wonsulting, with the mission to \“turn underdogs into winners.\"",
      moreInfo:"When Jonathan realized that getting your dream job doesn't require coming from a target school and having \"traditional\" background, he started a company to prove it. He works on many initiatives, providing advice and words of wisdom on LinkedIn and through speaking engagements. He has led 210+ workshops in 9 different countries; been featured on Forbes as one of the youngest top jobs search experts; and amassed over half a million followers on social media. Jonathan's talk will share with us secrets to level up your professional career and meet your aspirations, no matter your background."
    },
    {
      img: bruce_pic,
      name: "Bruce Monger", 
      title: "Cornell Professor, Climate Activist", 
      link: "https://www.engineering.cornell.edu/faculty-directory/bruce-monger",
      blurb: "Bruce Monger received his B.A. degree from University of Washington and a Ph.D. from University of Hawaii and now teaches Oceanography, Cornell's most popular course.",
      moreInfo:"When Dr. Monger was just starting out his career, he made the life-changing decision to take a motorcycle trip up the country, where he had several revelations that led him to his life's purpose. Now he uses his course and the rest of his life’s work to emphasize climate change impacts and the need for citizen activism to force leaders to enact policies that will decarbonize the global energy system by midcentury. His talk will highlight the importance of bottom-up activism and inspire you to take a step back and reflect on the freedom, purpose, and responsibility that comes with a life well-lived."
    }
  ]

  experiences = {
    "An live experience":
      "Despite being online, Jonathan and Bruce will be giving their TEDx talks in real time.",
    "A short and sweet event":
      "Our April 11th salon will last around 1 hour, leaving us time afterwards for...",
    "Q&A with our speakers":
      "We are grateful to Jonathan and Bruce for an amazing opportunity to join them for a Q&A session after their talks.",
    "Skills you can take home":
      "Bruce and Jonathan will share with us TEDx talks that will educate and inspire us in ways that we can apply immediately after their talks."
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
                  <em>Uproot: A Virtual Series | No. 2 | 4.11.2021</em>
                  <br />
                </p>
                
                {/* <p className="lead font-weight-normal">
                  In our most ambitious conference to date, we brought speakers
                  from across the country and from our own Cornell community in
                  a one-of-a-kind event featuring talks and performances that
                  entertained, inspired, informed, and moved our audience. Thank
                  you to everyone who supported this year's event!
                </p> */}
                
                <p className="lead font-weight-normal">
                At our April 11th salon at 1pm EST, we will be hosting Bruce Monger and Jonathan Javier as they share their TEDx talks and open up for a live QA session afterwards. Join us in discussing the urgency of the climate crisis, revolutionizing your approach to networking, and discovering your personal role in changing our future.
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
            Have you ever done something spontaneous that changed your life? Have you ever felt like an underdog but came out on top anyways?
          </h2>
          <p>
            At our second salon event, we explore our speakers' answers to these questions as they give TEDx talks on their thoughts and passions. Jonathan will guide us through techniques that can change your perspective on landing that reach job, and Bruce will share with us the power of bottom-up activism and his path to a life dedicated to fighting climate change.
          </p>
          <p>
            Join our TEDxCornell team as we host Jonathan Javier and Bruce Monger for a virtual event you won't forget. As the second of three parts of our Uproot series this year, this salon will educate us about climate change and professional networking and inspire us to take action in our lives when it matters.
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
          txt="Reserve your virtual seat for our salon on April 11th, 2021 at 1pm EST to experience our event. We hope to see you there!"
          button="Register Now"
          buttonHref="https://forms.gle/xUrUkuHH8sw4tpSWA"
        />
      </div>
    );
  }
}

export default Events;
