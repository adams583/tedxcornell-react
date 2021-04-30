import React from "react"
import {Image} from "react-bootstrap"
import "./ProfilePanel.css"

function ProfilePanel(props) {
    const infoStyles = {textAlign: props.reversed ? "right" : "left"}
    const borderStyles = props.reversed ? {borderRight: "solid thick var(--accent)"} : {borderLeft: "solid thick var(--accent)"}

    return (
        <div className="profile-container" style={{flexDirection: props.reversed ? "row-reverse" : "row"}}>
            <div className="profile-visual">
                <div>
                    <Image src={props.profile.img} responsive />
                </div>
                <div className="info-profile-desc">
                    <div className="profile-name">{props.profile.name}</div>
                    <div className="profile-title">{props.profile.title}</div>
                </div>
            </div>

            <div className="profile-info" style={infoStyles}>
                <div className="profile-talk" style={borderStyles}>{props.profile.talk}</div>
                <div className="profile-blurb">{props.profile.blurb}</div>
                <div className="profile-more-info"><p>{props.profile.moreInfo}</p></div>
                <div className="profile-link"><a href={props.profile.link}>Read more</a></div>
            </div>
        </div>
    )
}

export default ProfilePanel 