import React, { Component } from "react";
import Comments from "../Comments/Comments";
import CommentForm from '../CommentForm/CommentForm'
import './CurrentVideo.scss'
import Views from '../../assets/images/Icons/Icon-views.svg'
import Likes from '../../assets/images/Icons/Icon-likes.svg'

function CurrentVideo({currentVideo}) {

        return(
            <>
                <video className='video__poster' controls poster={currentVideo.image}/>
                <div className='video__current'>
                    <h2 className='video__title'>{currentVideo.title}</h2>
                    <div className='video__container1'>
                        <h3 className='video__channel'>By {currentVideo.channel}</h3>
                        <p className='video__date'>{new Date(currentVideo.timestamp).toLocaleDateString()}</p>
                    </div>
                    <div className='video__container2'>
                        <img className='video__views-icon' src={Views}/>
                        <p>{currentVideo.views}</p>
                        <img className='video__likes-icon' src={Likes}/>
                        <p>{currentVideo.likes}</p>
                    </div>
                    <p className='video__description'>{currentVideo.description}</p>
                    <CommentForm currentVideo={currentVideo}/>              
                    <Comments comments={currentVideo.comments}/>
                </div>
            </>
        );
}

export default CurrentVideo;