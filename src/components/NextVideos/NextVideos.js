import React from "react";
import './NextVideos.scss'

export default function NextVideos({nextVideos, currentVideo, clickHandler}) {
    return (
        <div>
            {nextVideos
            .filter((video) => video.id !== currentVideo.id)
            .map((data, key) => {
                return(
                         <Video
                            key={key}
                            title={data.title}
                            channel={data.channel}
                            image={data.image}
                            clickHandler={clickHandler}
                            id ={data.id}
                            /> 
                );
            })}
        </div>
    );
};

const Video = ({ image, title, channel, clickHandler, id }) => {
    return (
        <div className="next-video__container" onClick={() => clickHandler(id)}>
            <img className='next-video__image' src={image}/>
            <div>
                <p>{title}</p>
                <p>{channel}</p>
            </div>
        </div>
    );
};