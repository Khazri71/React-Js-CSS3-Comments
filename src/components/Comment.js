import React from "react";
import "../App.css";

const Comment = (props) => {
  let { comment } = props;
  return (
    <div className="box">
      <h4>
        Name : {comment.firstName} {comment.lastName}
      </h4>
      <h5>Title : {comment.title}</h5>
      <p>{comment.commentText}</p>
    </div>
  );
};
export default Comment;
