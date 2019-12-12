import React from "react";

import "./Comment.css";
function Comment({ comment }) {
  return (
    <div className="comment">
      <img src={comment.avatar} alt="User comment avatar" />
      <p className="comment-description">
        <strong>{comment.user}&nbsp;</strong>
        {comment.description}
      </p>
    </div>
  );
}

export default Comment;
