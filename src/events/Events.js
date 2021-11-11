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
import marcela_pic from "../img/marcela.jpg";
import daniel_pic from "../img/daniel_pic.jpg";
import larry_pic from "../img/larry_pic.jpg";
import ishan_pic from "../img/ishan.jpg";
import bruce_pic from "../img/bruce.jpg"
import jonathan_pic from "../img/jonathan.jpg"
import cat_pic from "../img/cat.jpg";
import john_pic from "../img/john.jpg";
import ProfilePanel from "../common/info/ProfilePanel";
import ImageTextOverlay from "../common/ImageTextOverlay";
import page_img from "../img/team2019.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

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
    //   img: jonathan_pic,
    //   name: "Jonathan Javier", 
    //   title: "CEO/Founder of Wonsulting", 
    //   link: "https://www.forbes.com/sites/danabrownlee/2021/02/07/how-this-millennial-skipped-applications-landed-his-dream-tech-job-using-social-media/?ss=careers&sh=77c8c66a2f6b",
    //   blurb: "Jonathan Javier is the CEO and founder of Wonsulting, with the mission to \“turn underdogs into winners.\"",
    //   moreInfo:"When Jonathan realized that getting your dream job doesn't require coming from a target school and having \"traditional\" background, he started a company to prove it. He works on many initiatives, providing advice and words of wisdom on LinkedIn and through speaking engagements. He has led 210+ workshops in 9 different countries; been featured on Forbes as one of the youngest top jobs search experts; and amassed over half a million followers on social media. Jonathan's talk will share with us secrets to level up your professional career and meet your aspirations, no matter your background."
    // },
    // {
    //   img: bruce_pic,
    //   name: "Bruce Monger", 
    //   title: "Cornell Professor, Climate Activist", 
    //   link: "https://www.engineering.cornell.edu/faculty-directory/bruce-monger",
    //   blurb: "Bruce Monger received his B.A. degree from University of Washington and a Ph.D. from University of Hawaii and now teaches Oceanography, Cornell's most popular course.",
    //   moreInfo:"When Dr. Monger was just starting out his career, he made the life-changing decision to take a motorcycle trip up the country, where he had several revelations that led him to his life's purpose. Now he uses his course and the rest of his life’s work to emphasize climate change impacts and the need for citizen activism to force leaders to enact policies that will decarbonize the global energy system by midcentury. His talk will highlight the importance of bottom-up activism and inspire you to take a step back and reflect on the freedom, purpose, and responsibility that comes with a life well-lived."
    // },
    {
      img: marcela_pic,
      name: "Marcela Ot'Alora",
      title: "Psychotherapist, Artist",
      link: "https://tim.blog/2019/11/22/marcela-otalora/",
      talk: "The Healing Power of MDMA through Reconnection",
      blurb: "Marcela was born and raised in Colombia and currently lives in Boulder, Colorado. She is an artist and a psychotherapist who practices and conducts research on MDMA-assisted therapy.",
      moreInfo: "In her private practice she works in partnership with clients to nourish awareness and connection to innate essence. For over 30 years her interest and focus on trauma has led her to understand the healing process as an intimate re-connection to self, others, and the world, through compassion, acceptance, and honoring of each other’s human spirit. In addition to working with trauma and PTSD, she has dedicated her professional life to teaching, and research. With clients she uses art as a vehicle for deepening and processing experiences through non-verbal autobiographical storytelling. For the Multidisciplinary Association for Psychedelic Studies (MAPS), Marcela has worked as therapist and Principal Investigator for various studies weaving psychotherapy and MDMA for the treatment of PTSD. Additionally, she is a trainer and supervisor for MAPS’ MDMA-assisted psychotherapy training program."
    },
    {
      img: daniel_pic,
      name: "Daniel James II",
      title: "Podcast & Radio Host, Student Leader",
      talk: "Why You Should Never Tell a Black Child They Act White",
      link: "https://www.wvbr.com/blackvoices",
      blurb: "Daniel James II uses his platform as an African American, a Southerner, and a Zoomer baby to empower, celebrate, and uplift the voices too often neglected, and too often forgotten.",
      moreInfo: "Born in Marion, South Carolina, a rural working class town, Daniel James II gained his place as a junior at Cornell University, carrying with him to the Ivy League a desire to better the lives of people. As the creator and host of Black Voices on the Hill, a podcast & radio show, he aims to amplify the voices of black students, alumni, and city leaders. Inspired by the deaths of George Floyd, Ahmaud Arbery, and Breonna Taylor, he has been able to reach thousands in upstate New York, talking weekly about racism, sexism, and activism, with guests ranging from TikTok sensations, investment fund creators, to the city mayor himself. As a mentor at a local carceral facility and president of the Labor School student body, Daniel has skillfully used his voice over the airwaves to serve the public and reach the masses. This spring, he is an Emerging Leader intern for the Congressional Black Caucus."
    },
    {
      img: larry_pic,
      name: "Larry Williams Jr.",
      title: "Union Leader, Entrepreneur",
      link: "https://unionbase.org/",
      talk: "The American Dream is a Nightmare for Workers",
      blurb: "In college, Larry Williams Jr. landed a job at a union and has never looked back. Since then, he's worked his way up and created his own means for impacting all workers in the U.S.",
      moreInfo: "Larry is founder of UnionBase.org and co-founder of Progressive Workers Union (PWU). UnionBase is the first secure social networking and education platform for unions and union workers, and is regarded by Forbes and Fast Company as the leading digital platform for a new generation of workers. PWU is a growing and powerful national union for non-profit employees that was started at Sierra Club, America's largest environmental organization. Larry will be leading us through his journey and sharing insight on how we need to view this time as a call for change in the future of employment."
    },
    {
      img: ishan_pic,
      name: "Ishan Sharma",
      title: "Herbert Scoville Jr. Peace Fellow of Emerging Tech at FAS",
      link: "https://fas.org/expert/ishan-sharma/",
      talk: "Democracy & Emerging Surveillance Technology: How We Stop 2030 From Becoming 1984.",
      blurb: "Ishan graduated from Cornell in 2020 and now spearheads an initiative of the Federation of American Scientists aimed at countering 21st century digital authoritarianism, the focus of his TEDx talk.",
      moreInfo: "He’s spoken with over 40 surveillance industry experts, activists, leading scholars, government officials, and police chiefs to reduce the violence emerging surveillance technologies bring to minority communities, at home and abroad. Ishan is also an Advisor for the Day One Project, which has curated 100+ action-oriented science & technology proposals and informed policy decisions at some of the highest levels of government. He holds a Bachelor of Science in Industrial and Labor Relations from Cornell University and has studied jurisprudence and international human rights law at the University of Oxford. Ishan is a board member of two nonprofits that aim to empower youth through mentorship and media literacy, and he is one of 24 Senior John Lewis Fellows around the world investigating the future of democracy, oppression, and human rights in the 21st century."
    },
    {
      img: cat_pic,
      name: "Cat Hoke",
      title: "Co-Founder, Hustle 2.0",
      link: "https://www.cathoke.com/",
      talk: "Stop Cancelling Yourself",
      blurb: "Over 17 years, Cat's efforts have led 7,000 executives, entrepreneurs, and investors to volunteer as mentors and employers for 8,500 formerly incarcerated program graduates. Her programs reduce violence and have produced leading recidivism rates of under 8%.",
      moreInfo: "As the only girl on the high school wrestling team and as a Brazilian jiu-jitsu fighter, Cat mastered the art of “breakfall”: how to prevent injury when you get taken down. Breakfall proved to be a transferable skill in her career as a three-time entrepreneur, disrupting the American prison industry. Cat works with gang leaders in the most notorious prisons, leading gang intervention programs. She has survived career-ending threats and devastating takedowns. Seth Godin published her best-selling book, A Second Chance: For You, For Me, and for the Rest of Us. Fast Company named Cat one of the 100 Most Creative People in Business, Forbes named her on 40 Women to Watch Over 40, and she has received the MDC Partners Humanitarian Award. "
    },
    {
      img: john_pic,
      name: "John Jackson",
      title: "Director of Correctional Partnerships, Hustle 2.0",
      link: "https://www.hustle20.com/team/",
      talk: "How I Got Out of a Prison Gang",
      blurb: 'Prison gang members live by a code, “\’Til the casket drops.” What if there was a way to make it out alive?',
      moreInfo: "At 17, John was introduced to a life of crime by the person who promised to protect him. He spent his next 18 years in prison, heavily entrenched in gang culture. Prison officials labeled him as “the worst of the worst” and locked him in a notorious supermax prison, Pelican Bay. John transformed his life and now works with gang leaders to stop the generational cycle of gang violence nationally. Together, they’ve authored the first-ever retirement plan for gang members, called Squaring Up. With Hustle 2.0, John has co-authored 10 books that provide rehabilitation and healing for people in jails and prisons nationally."
    }
  ]

  experiences = {
    "Six speakers":
      "Our six speakers in 2020 came together to share their stories, insight, and life's work in the spirit of ideas worth spreading.",
    "A virtual main event":
      "COVID-19 had caused us to rethink how we can continue to bring great ideas to the Cornell community and beyond. In 2020, our event was livestreamed for anyone and everyone to watch.",
    "Student and alumnus speakers":
      "Each year we like to feature speakers who are related in some way to Cornell. In this event, we heard from a current student and a recent graduate of Cornell.",
    "Exclusive content":
      `Some of our speakers brought very new ideas and research to us.
       We had the opportunity to be some of the first to hear what they planed on sharing.`
  };




  render() {
    const imageStyle = {
      height: '30em'
    }
    const textStyle = {
      position: 'absolute',
      color: 'white',
      top: '25%',
      left: '10%',
    }
    return (
      <div>
        <ImageTextOverlay
          title="Meet Our Speakers"
          body="Each of our events highlights the contributions, experiences,
           and ideas of our amazing speakers. Learn more about the speakers for our upcoming event!"
          img={page_img}
          imageStyle={imageStyle}
          textStyle={textStyle}
        >
        </ImageTextOverlay>
        <Container fluid >
          <Row style={{ backgroundColor: '#f25757' }} className="justify-content-between">
            <div className="col">
              <Image src={daniel_pic} style={{marginLeft: "-1em"}} fluid></Image>
            </div>
            <Col className="col d-flex align-items-center text-light">
              <Container>
                <Stack gap={1} className="my-auto">
                  <h2>Person X</h2>
                  <hr></hr>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.</p>
                </Stack>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Events;
