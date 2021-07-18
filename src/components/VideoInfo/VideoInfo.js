export default function VideoInfo() {
    return(
            <div>    
                <h2>{this.state.currentVideo.title}</h2>
                <h3>{this.state.currentVideo.channel}</h3>
                <p>{this.state.currentVideo.timestamp}</p>
                <p>{this.state.currentVideo.views}</p>
                <p>{this.state.currentVideo.likes}</p>
                <p>{this.state.currentVideo.description}</p>
            </div>    
    );
}
                
                