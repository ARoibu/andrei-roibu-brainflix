import './CommentForm.scss'


export default function CommentForm(props) {

    return(
        <div className='comment-form'>
            <h3 className='comment-form__counter'>{props.currentVideo.comments.length} Comments</h3>
            <div className="comment-form__container">
            <div className="comment-form__avatar"></div>
                <div className='comment-form__form-area'>
                    <p className="comment-form__heading">JOIN THE CONVERSATION</p>
                    <form className="comment-form__input">
                        <textarea className="comment-form__field" name="comment" id="comment" cols="30" rows="1" placeholder="Add a comment"></textarea>
                        <input className="comment-form__button" type="submit" value="COMMENT"/>
                    </form>
                </div>    
            </div>
        </div>
    );
}