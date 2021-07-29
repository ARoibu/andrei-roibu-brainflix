import React from "react";
import './NextVideos.scss'
import { Link } from "react-router-dom";

const NextVideos = ({nextVideos, currentVideo})=> {
    console.log(nextVideos);
    return (
        <div className='video__next'>
                    <h3 className='next-video__heading'>NEXT VIDEO</h3>
                    {/* <NextVideos nextVideos={nextVideos} currentVideo={currentVideo} clickHandler={this.clickHandler}/> */}
               
        <div>
            {nextVideos
            .filter((video) => video.id !== currentVideo.id) //shows only videos that don't have the same ID as the current video
            .map((data) => { //uses Video component HTML structure and maps through the array to fill the values for each part.
                return(
                    <Link className='next-video__link' to={`/videos/${data.id}`} key={data.id}>
                    <div className="next-video__container">
                        <img className='next-video__image' src={data.image}/>
                        <div className='next-video__text'>
                            <h3 className='next-video__title'>{data.title}</h3>
                            <p>{data.channel}</p>
                        </div>
                    </div>
                    </Link>
               
                );
            })}
        </div>
        </div>
    );
};

export default NextVideos;
        
