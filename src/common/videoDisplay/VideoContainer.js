import React, { Component } from "react";
import "./VideoContainer.css";
import {videos} from "./videoInfo.js"
import YouTube from 'react-youtube';
import VideoDisplay from "./VideoDisplay.js"
import zenscroll from "zenscroll";

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: Array(videos.length).fill(false),
    };
  }
  

  handleClick(i){
    const toggled = this.state.toggled.slice();
    for (var j = 0; j < videos.length; j++){
      if (j == i) {continue;}
      toggled[j] = false;
    }
    toggled[i] = !toggled[i];
    this.setState({toggled: toggled});
  }

  isDisplayed(i){
    const opts = {
      height: '500',
      width: '820',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    const shouldDisplay = this.state.toggled.slice();
    const displayedVideo = document.getElementById("videoDisplayed");
    if (shouldDisplay[i]){
      return (
        <YouTube
        videoId= {videos[i].videoId}
        opts={opts}
        onReady={this._onReady}
        onPlay = {setTimeout( () => zenscroll.to(displayedVideo), 300)}
        />
      );
    }
  }

  renderVideo(i){
    const video = videos[i];
    return (
    <VideoDisplay 
      title = {video.title}
      speaker = {video.speaker}
      src = {video.src}
      date = {video.data}
      desc = {video.desc}
      onClick={() => this.handleClick(i)}
      toggled = {this.state.toggled[i]}
    />
    );
  }


  render() {

    return (
     <div class="container">
       <div class = "rowOfVids">
          {this.renderVideo(0)}
          {this.renderVideo(1)}
          {this.renderVideo(2)}
       </div>
       <div class="displayBlock" id="videoDisplayed">
          {this.isDisplayed(0)}
          {this.isDisplayed(1)}
          {this.isDisplayed(2)}
       </div>
    </div> 
    );
  }
}

export default VideoContainer;
