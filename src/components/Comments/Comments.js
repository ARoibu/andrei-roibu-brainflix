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
        <div>
            <div></div>
            <div>
                <h3>{name}</h3>
                <p>{timestamp}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
};