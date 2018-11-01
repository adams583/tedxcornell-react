import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./home/Home";
import Events from "./events/Events";
import Team from "./team/Team";
import Apply from "./apply/Apply";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/team" component={Team} />
            <Route path="/apply" component={Apply} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
