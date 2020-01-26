import React, { Component } from "react";
import "./RightNav.css";

class RightNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = e => {
    this.setState({ menuOpen: !this.state.menuOpen });
    console.log(this.state.menuOpen);
  };

  render() {
    return (
      <div className="rightnav-container">
        <div className="rightnav-large-screen container-fluid sm-display-none">
          <div className="large-menu-items">
            <div>
              <a href="/about">About</a>
            </div>
            <div>
              <a href="/events">Events</a>
            </div>
            <div>
              <a href="/apply">Apply</a>
            </div>
            <div>
              <a href="/faq">FAQ</a>
            </div>
            {/* <div>
              <a href="https://cornellconcerts.universitytickets.com/w/event.aspx?id=1356&r=970e11c5b72d470baa6f610f23a7a584">
                Tickets
              </a>
            </div> */}
          </div>
        </div>
        <div className="sm-display rightnav-menu-sm-container">
          {!this.state.menuOpen && (
            <div className="pointer" onClick={this.toggleMenu}>
              <i className="fa fa-bars" />
            </div>
          )}
          {this.state.menuOpen && (
            <div className="pointer" onClick={this.toggleMenu}>
              <a>x</a>
            </div>
          )}
          {this.state.menuOpen && (
            <div id="small-screen-menu">
              <div className="small-menu-items">
                <div>
                  <a href="/about">About</a>
                </div>
                <div>
                  <a href="/events">Events</a>
                </div>
                <div>
                  <a href="/sponsors">Sponsors</a>
                </div>
                <div>
                  <a href="/apply">Apply</a>
                </div>
                <div>
                  <a href="/faq">FAQ</a>
                </div>
                {/* <div>
                  <a href="https://cornellconcerts.universitytickets.com/w/default.aspx?fbclid=IwAR2k2XgUpqTVmnCj-M9_Mpa6FYEnWx2Euus7aRv3YLsUAAVFh32SFztZTUA">
                    Tickets
                  </a>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RightNav;
