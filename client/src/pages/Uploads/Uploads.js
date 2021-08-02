import thumbnail from "../../assets/images/Images/Upload-video-preview.jpg"
import './Uploads.scss'
import axios from "axios";

export default function Uploads() {
    function publish(event) {
        event.preventDefault();
        const newVideo = {
            title: event.target.title.value,
            description: event.target.description.value,
        };
        createVideo(newVideo);
        alert('Upload');
        window.location = '/';
    };

    const createVideo = (obj) => {
        axios.post("/videos", obj)
          .then((response) => {
            this.setState({ videos: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return(
        <div className='upload'>
            <h1 className='upload__heading'>Upload Video</h1>
            <form onSubmit={publish} className='upload__form'>
                <div className='upload__main'>
                    <div>
                        <p className='upload__label'>VIDEO THUMBNAIL</p>
                        <img className='upload__thumbnail' src={thumbnail}/><br/>
                    </div>
                    <div className='upload__fields'>
                        <label className='upload__label' for='title'>TITLE YOUR VIDEO</label><br/>
                        <input className='upload__title' placeholder="Add a title to your video" type='text' id='title' name='title'/><br/>
                        <label className='upload__label' for='description'>ADD A VIDEO DESCRIPTION</label><br/>                    
                        <textarea className='upload__description' id='description' placeholder='Add a description of your video' name='description'></textarea><br/>
                    </div>
                </div>
                <div className='upload__buttons'>
                    <input className='upload__publish' type="submit" value='PUBLISH'/><br/>
                    <input className='upload__cancel' type="submit" value='CANCEL'/>
                </div>
            </form>
        </div>
    )
}