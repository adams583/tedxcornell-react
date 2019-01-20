import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./home/Home";
import Events from "./events/Events";
import About from "./about/About";
import Apply from "./apply/Apply";
import AOS from "aos";
import anime from "animejs";
import "aos/dist/aos.css";
import RightNav from "./common/RightNav";
import Speakers from "./speakers/Speakers";
import SpeakerProfile from "./speakers/SpeakerProfile";
import {
  speakers_2019,
  speakers_2018,
  speakers_2015
} from "./speakers/speaker-profiles";
import logoImg from "./img/Black_TEDx_Logo_small.png";
import { Image } from "react-bootstrap";
import FAQ from "./faq/FAQ";

class App extends Component {
  render() {
    AOS.init();
    return (
      <div className="App">
        <Router>
          <div>
            {/* <Header /> */}

            <a className="logo" href="/">
              <Image src={logoImg} responsive />
            </a>

            <RightNav />
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/about" component={About} />
            <Route path="/apply" component={Apply} />
            <Route exact path="/speakers" component={Speakers} />
            <Route exact path="/faq" component={FAQ} />
            {Object.keys(speakers_2019).map(key => (
              <Route
                path={`/speakers/${speakers_2019[key].url}`}
                render={props => (
                  <SpeakerProfile {...props} person={speakers_2019[key]} />
                )}
              />
            ))}
            {Object.keys(speakers_2018).map(key => (
              <Route
                path={`/speakers/${speakers_2018[key].url}`}
                render={props => (
                  <SpeakerProfile {...props} person={speakers_2018[key]} />
                )}
              />
            ))}
            {Object.keys(speakers_2015).map(key => (
              <Route
                path={`/speakers/${speakers_2015[key].url}`}
                render={props => (
                  <SpeakerProfile {...props} person={speakers_2015[key]} />
                )}
              />
            ))}

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
