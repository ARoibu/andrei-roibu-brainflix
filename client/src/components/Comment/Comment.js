const Comment = ({ name, timestamp, comment }) => {
    return (
        <div className='comments'>
            <div className='comments__avatar'></div>
            <div className='comments__data'>
                    <h3>{name}</h3>
                    <p className='comments__date'>{new Date(timestamp).toLocaleDateString()}</p>
                <p className='comments__text'>{comment}</p>
            </div>
        </div>
    );
};

export default Comment;