import "./Comments.scss";
import Comment from "../Comment/Comment";

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

