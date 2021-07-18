import React, { Component } from "react";
import videoData  from "../../data/video-details.json";
import NextVideos from "../NextVideos/NextVideos"
import Comments from "../Comments/Comments";
import VideoInfo from "../VideoInfo/VideoInfo"
import './CurrentVideo.scss'

export default class CurrentVideo extends Component {
    state={
        nextVideos: videoData,
        currentVideo: videoData[0],
    };

    clickHandler = (id) => {
        this.setState({
            currentVideo: this.state.nextVideos.find((video) => video.id === id)
        });
    };

    render() {
        return(
            <div>
                <video className='video__poster' controls poster={this.state.currentVideo.image}></video>
                <h2>{this.state.currentVideo.title}</h2>
                <h3>{this.state.currentVideo.channel}</h3>
                <p>{this.state.currentVideo.timestamp}</p>
                <p>{this.state.currentVideo.views}</p>
                <p>{this.state.currentVideo.likes}</p>
                <p>{this.state.currentVideo.description}</p>
                {/* <VideoInfo /> */}
                <h3>3 Comments</h3>
                <Comments comments={this.state.currentVideo.comments}/>
                <NextVideos nextVideos={this.state.nextVideos} currentVideo={this.state.currentVideo} clickHandler={this.clickHandler}/>
            </div>
        );
    }
}