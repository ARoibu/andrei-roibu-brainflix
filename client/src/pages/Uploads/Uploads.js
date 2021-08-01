import thumbnail from "../../assets/images/Images/Upload-video-preview.jpg"
import './Uploads.scss'

export default function Uploads() {
    function publish(e) {
        e.preventDefault();
        alert('Upload');
        window.location = '/';
    }

    return(
        <div className='upload'>
            <h1 className='upload__heading'>Upload Video</h1>
            <form className='upload__form'>
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
                    <input onClick={publish} className='upload__publish' type="submit" value='PUBLISH'/><br/>
                    <input className='upload__cancel' type="submit" value='CANCEL'/>
                </div>
            </form>
        </div>
    )
}