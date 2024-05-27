import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Поменяли импорт
import { PostContext } from "./PostContext";

const PostDetails = () => {
  const { postId } = useParams(); // Получаем параметры маршрута
  const { posts, getComments, comments, addComment } = useContext(PostContext);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ postId, author, content });
    setAuthor("");
    setContent("");
  };

  const post = posts.find((post) => post.id === parseInt(postId));

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>{post.content}</p>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>Author: {comment.author}</p>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
