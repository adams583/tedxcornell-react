import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import Home from "./home/Home";
import Events from "./events/Events";
import About from "./about/About";
import Apply from "./apply/Apply";
import AOS from "aos";
import ErrorPage from "./error/ErrorPage";
import "aos/dist/aos.css";
import TopNav from "./common/topnav/TopNav"
import SpeakerProfile from "./speakers/SpeakerProfile";
import {
  speakers_2019,
  speakers_2018,
  speakers_2015
} from "./speakers/speaker-profiles";
import FAQ from "./faq/FAQ";
import Sponsors from "./sponsors/Sponsors";

export default function App() {
  // Initialize AOS: https://michalsnik.github.io/aos/
  AOS.init();
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <TopNav />
          
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/about" component={About} />
            <Route path="/apply" component={Apply} />
            <Route path="/sponsors" component={Sponsors} />
            <Route exact path="/faq" component={FAQ} />
            {Object.keys(speakers_2019).map(key => (
              <Route
                key={key}
                path={`/speakers/${speakers_2019[key].url}`}
                render={props => (
                  <SpeakerProfile {...props} person={speakers_2019[key]} />
                )}
              />
            ))}
            {Object.keys(speakers_2018).map(key => (
              <Route
                key={key}
                path={`/speakers/${speakers_2018[key].url}`}
                render={props => (
                  <SpeakerProfile {...props} person={speakers_2018[key]} />
                )}
              />
            ))}
            {Object.keys(speakers_2015).map(key => (
              <Route
                key={key}
                path={`/speakers/${speakers_2015[key].url}`}
                render={props => (
                  <SpeakerProfile {...props} person={speakers_2015[key]} />
                )}
              />
            ))}
            <Route component={ErrorPage} />
          </Switch>
*/}
          <Footer /> 

        </React.Fragment>
      </Router>
    </div>
  );
}

