import React, { Component, useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "@fontsource/staatliches"
import "@fontsource/monoton"
import Form from "react-bootstrap/Form";
import about_img from "../img/loutip.jpg"
import img from "../img/cornellfall.jpg"


function MailingList() {
  const [inMailList, setInMailList] = useState(false)

  function handleSubmit() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec";
    const form = document.forms["home-submit-to-google-sheet"];
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function (response) {
        form.reset();
        console.log("Success!", response);
        setInMailList(true)
      })
      .catch(error => console.error("Error!", error.message));
  }

  return (<div>
    <div className="py-2">
      <Form
        name="home-submit-to-google-sheet">
        <Form.Control className="p" name="email"
          type="text" placeholder="Enter Email" required />
      </Form>
    </div>
    <div className="py-2" id="join">
      {
        inMailList ?
          <div style={{ backgroundColor: 'green' }} className="text-white  w-25 rounded text-center">
            <h4 className="py-2">Joined!</h4>
          </div> :
          <Button variant="outline-danger" onClick={handleSubmit}>Join Mailing List</Button>
      }
    </div>
  </div>)
}





class Events extends Component {

  render() {
    return (
      <div>
        <div style={{
          height: '30em', backgroundImage: `url(${img})`, backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} className="d-flex align-items-center">
          <Container className="d-flex justify-content-center ">
              <Card style={{ width: '30em', border: '1px solid black', boxShadow: '-3px 3px 3px' }} className="px-4 py-3 text-center">
                <Card.Body>
                  <Card.Title className="text-center"><h1>Apply to be a Speaker!</h1></Card.Title>
                  <Card.Text className="py-3">
                    Do you have an Idea Worth Sharing?
                    TEDxCornell is currently looking for speakers for our 2023 event! Apply or Nominate
                    a speaker now!
                  </Card.Text>
                <Button variant="outline-danger" href="https://forms.gle/RZ5eErCicEx55Lsi8"className="px-4 py-2">Apply!</Button>
                </Card.Body>
              </Card>
          </Container>
        </div>
        
        <div id="filler" className="py-4" style={{ backgroundColor: '	#282828	' }}></div>
        <div>
          <div style={{
            height: '30em', backgroundImage: `url(${about_img})`, backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }} className="d-flex align-items-center">
            <Container>
              <Row>
                <div class="col">
                  <Card style={{ width: '20rem', float: 'right' }}>
                    <Card.Body>
                      <Card.Title>About Us</Card.Title>
                      <Card.Text>
                        TEDxCornell is organized by a small group of dedicated students.
                        We handle all logistics of the event from speaker curation to
                        publicity. View our "Our Story" page to learn about our origins
                        and our current student team.
                      </Card.Text>
                      <a href="/team"> <Button variant="danger">Our Story</Button></a>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <Container style={{ width: '95%' }} id="join-us-slide" className="py-5">
            <Row>
              <Col className="py-3">
                <h1>Partner with TEDxCornell</h1>
                <p className="py-3">When you support the TEDxCornell program, you enable
                  our efforts to empower and grow the global TEDx
                  community of volunteers.</p>
                <div className="py-2">
                  <h3>Our Email : <span style={{ color: 'red' }}><u>tedx@cornell.edu</u>  </span></h3>
                </div>
              </Col>
              <Col className="py-3">
                <h1>Want to learn more about TEDxCornell?</h1>
                <p className="py-3">Want to be up to date on current TEDxCornell
                  news? Sign up here and we'll send you exciting updates
                  on the world of TEDxCornell. </p>
                <p><b>Subscribe to get the latest TEDx news!</b></p>
                <MailingList></MailingList>
              </Col>
            </Row>
          </Container>
        </div>

      </div >
    );
  }
}

export default Events;
