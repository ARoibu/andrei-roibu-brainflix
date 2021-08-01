import React from "react";
import {API_URL} from '../../util'
import axios from "axios";
import './home.scss'
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import NextVideos from "../../components/NextVideos/NextVideos";


class Home extends React.Component {
    state = {
        nextVideos: [],
        currentVideo: null,
    };

    componentDidMount() {
        axios.get(`${API_URL}/videos`)
        .then((response)=>{
            this.setState({nextVideos: response.data})
            console.log(response.data);
            return axios.get(`${API_URL}/videos/1af0jruup5gu`);
        })
        .then((response)=>{
            this.setState({currentVideo: response.data})
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
       
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios.get(`${API_URL}/videos/${this.props.match.params.id}`)
            .then((response)=>{
                this.setState({currentVideo: response.data});
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    }

    render() {
        return(
            <div className='layout'>
            {this.state.currentVideo && (
               <CurrentVideo currentVideo={this.state.currentVideo}/> 
            )} 
            
            {this.state.nextVideos && this.state.currentVideo && (
                <NextVideos className='layout__videos' nextVideos={this.state.nextVideos} currentVideo={this.state.currentVideo}/>
            )}
            
            </div> 
        );
    }
}

export default Home;