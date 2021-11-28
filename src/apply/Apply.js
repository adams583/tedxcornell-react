import React, { Component } from "react";
import "./Apply.css";
import ImageTextOverlay from "../common/ImageTextOverlay";
import header_img from "../img/cornellpic2.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ApplyRow from "../apply/ApplyRow"

class Apply extends Component {
  handleSubmit(e) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcZNKses-XNAzdA9U6LwSr4MTsD4CvuoBZrNfESnam5rMuk38m/exec";
    e.preventDefault();
    const form = document.forms["apply-submit-to-google-sheet"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function (response) {
        form.reset();
        console.log("Success!", response);
      })
      .catch(error => console.error("Error!", error.message));
  }


  render() {
    return (
      <div>
        <ImageTextOverlay
          title="Apply"
          body="Interested in working with TEDxCornell?"
          img={header_img}
        >
        </ImageTextOverlay>
        <Container className="my-3" style={{ fontFamily: "Montserrat", fontSize: "24px", lineHeight: '36px' }}>
          <Row className="pt-4 px-3">
            <Col className="col-md-8">
            We're always looking for new voices and new ideas to add
            to the TED community. Through our TEDxCornell main event
            and newly introduced salon series, we take those great ideas
            and help them grow — but they start with your suggestions.
            </Col>
          </Row>
          <Row className="mt-3 px-3" style={{ color: "red" }}>
            <b>See all the ways to get involved and let us know about 
              the most exciting, talented people in your network.</b>
          </Row>
          <Container className="my-5">
            <ApplyRow
            header="Apply to be a Speaker"
              info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
            img={header_img}
            button={"Apply!"}
            ></ApplyRow>
            <ApplyRow
              header="Nominate a Speaker"
              info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
              img={header_img}
              button={"Learn More"}
            ></ApplyRow>
            <ApplyRow
              header="Apply to be a part of our Team"
              info="Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
              img={header_img}
            ></ApplyRow>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Apply;
