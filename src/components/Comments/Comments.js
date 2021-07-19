import "./Comments.scss";

export default function Comments({comments}) {
    return (
        <div>
            {comments.map((data, key) => {
                return(
                         <Comment
                            key={key}
                            name={data.name}
                            timestamp={data.timestamp}
                            comment={data.comment}
                            />                         
                );
            })}
        </div>
    );
};

const Comment = ({ name, timestamp, comment }) => {
    return (
        <div className='comments'>
            <div className='comments__avatar'></div>
            <div className='comments__data'>
                <h3>{name}</h3>
                <p className='comments__date'>{timestamp}</p>
                <p className='comments__text'>{comment}</p>
            </div>
        </div>
    );
};