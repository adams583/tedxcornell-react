import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button"


function ApplyRow(props) {


  return (
    <Row className="justify-content-start" style={{margin: "0em 0 0em 0"}}>
      <div className="col-md-4 pr-5 pb-5">
        <Image src={props.img} roundedCircle fluid style={{ height: '100%' }} />
      </div>
      <div className="col-md-6 pl-5 ">
        <Stack gap={3}>
          <div style ={{borderBottom:'2px solid red'}}>
            <h3><b>{props.header}</b></h3>
          </div>
          <h5 style={{lineHeight:"1.8em"}}>{props.info}</h5>
          <div>
            {props.button &&
              <Button variant="danger" size="lg">
                {props.button}
              </Button>
            }
          </div>
        </Stack>
      </div>
      <hr className="my-5"></hr>
    </Row>
  );
}

export default React.memo(ApplyRow)