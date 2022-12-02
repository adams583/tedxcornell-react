import React, { Component } from "react";
import "./Sponsors.css";
import ImageTextOverlay from "../common/ImageTextOverlay";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import header_img from "../img/cornellpic2.jpg"



var platinum = {
  color: '#e3e2e5', type: 'Platinum', bullets: ["10 reserved tickets to main event",
    "Large size logo on all publicity materials",
    "Opportunity to raffle out products or benefits during event",
    "Honorary mentions and access to global audience outreach"]
}

var gold = {
  color: '#FFD700', type: 'Gold', bullets: ["8 reserved tickets to main event ",
    "Medium size logo all publicity material ",
    "Opportunity to raffle out products or benefits during event ",
    "Honorary mentions and access to global audience outreach"]
}

var silver = {
  color: '#C0C0C0', type: 'Silver', bullets: ["5 reserved tickets to main event ",
    "Medium size logo on all publicity materials ",
    "Opportunity to raffle out products or benefits during event"]
}

var bronze = {
  color: '#CD7F32', type: 'Bronze', bullets: ["3 reserved tickets to main event ",
    "Small size logo on all publicity materials ",
    "Opportunity to raffle out products or benefits during event"]
}

function Tier(props) {

  return <Row className="justify-content-center py-3 " style={{
    backgroundColor: props.color,
  }}>
    <Col md={8} className="justify-content-center">
      <h1 className="text-center "><u>{props.type}</u></h1>
      <ul>
        {
          props.bullets.map(bullet =>
            <li>
              {bullet}
            </li>
          )
        }
      </ul>

    </Col>
  </Row>
}

class Sponsors extends Component {


  render() {
    return (
      <div>
        <ImageTextOverlay
          title="Sponsorship Opportunities"
          body="Do you believe in our mission? Let's talk business"
        img={header_img}
        >
        </ImageTextOverlay>
        <div>

        </div>
        <div id="sponsorship-tiers">
          <Container fluid>
            {/* <Row className="justify-content-center border" style={{
              backgroundColor: '#E5E4E2'
            }}>
              <Col md={8} className="justify-content-center border">
                <h1 className="text-center ">Platinum</h1>
                <ul>
                  <li>
                    10 reserved tickets to main event
                  </li>
                  <li>
                    Large size logo on all publicity materials
                  </li>
                  <li>
                    Opportunity to raffle out products or benefits during event
                  </li>
                  <li>
                    Honorary mentions and access to global audience outreach
                  </li>
                </ul>
              </Col>
            </Row> */}
            <Tier {...platinum}></Tier>
            <Tier {...gold}></Tier>
            <Tier {...silver}></Tier>
            <Tier {...bronze}></Tier>

          </Container>
        </div>


      </div>
    );
  }
}
export default Sponsors;
