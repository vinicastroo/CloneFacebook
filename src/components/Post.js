import React from "react";

import { format } from "date-fns";
import pt from "date-fns/locale/pt";

import "./Post.css";
import Comment from "./Comment";

function Post({ post }) {
  return (
    <div className="post">
      <div className="user-post">
        <img src={post.avatar} alt="Post User" />
        <div className="user-description">
          <span className="user-name">{post.user}</span>
          <span className="date-post">
            {format(post.date, "dd MMM yyyy", { locale: pt })}
          </span>
        </div>
      </div>

      <p>{post.description}</p>

      <hr />

      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Post;
