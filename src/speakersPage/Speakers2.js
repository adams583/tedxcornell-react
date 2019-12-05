import React, { Component } from "react";
import "./Speakers2.css";
import Profile from "../common/profile/Profile";
import SplitPanel from "../common/SplitPanel";
import { speakers_2019 } from "../speakers/speaker-profiles";
import { Col } from "react-bootstrap";
import BottomPanel from "../common/BottomPanel";
import TwoImgPanel from "../common/TwoImgPanel";
import CustomButton from "../common/CustomButton";

class Speakers2 extends Component {
    render() {
        return (
                /* Speakers Rendering */
                <div className="container speakers-container">
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
                </div>
            
            );
        
        }
}
