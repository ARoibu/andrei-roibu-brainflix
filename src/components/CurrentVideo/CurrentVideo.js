import React, { Component } from "react";
import videoData  from "../../data/video-details.json";
import NextVideos from "../NextVideos/NextVideos"
import Comments from "../Comments/Comments";
import CommentForm from '../CommentForm/CommentForm'
import './CurrentVideo.scss'
import Views from '../../assets/images/Icons/Icon-views.svg'
import Likes from '../../assets/images/Icons/Icon-likes.svg'

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
            <div className='video'>
                <video className='video__poster' controls poster={this.state.currentVideo.image}></video>
                <div className='video__current'>
                    <h2 className='video__title'>{this.state.currentVideo.title}</h2>
                    <div className='video__container1'>
                        <h3 className='video__channel'>By {this.state.currentVideo.channel}</h3>
                        <p className='video__date'>{new Date(this.state.currentVideo.timestamp).toLocaleDateString()}</p>
                    </div>
                    <div className='video__container2'>
                        <img className='video__views-icon' src={Views}/>
                        <p>{this.state.currentVideo.views}</p>
                        <img className='video__likes-icon' src={Likes}/>
                        <p>{this.state.currentVideo.likes}</p>
                    </div>
                    <p className='video__description'>{this.state.currentVideo.description}</p>
                    <CommentForm />              
                    <Comments comments={this.state.currentVideo.comments}/>
                </div>
                <div className='video__next'>
                    <h3 className='next-video__heading'>NEXT VIDEO</h3>
                    <NextVideos nextVideos={this.state.nextVideos} currentVideo={this.state.currentVideo} clickHandler={this.clickHandler}/>
                </div>
            </div>
        );
    }
}