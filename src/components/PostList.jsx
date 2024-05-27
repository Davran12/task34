import React, { useContext, useEffect } from "react";
import { PostContext } from "./PostContext";
import { NavLink } from "react-router-dom";

const PostList = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <h2>Posts</h2>
      <p>
        <NavLink to={"/posts/new"}>New</NavLink>
      </p>
      <p>
        <NavLink to={"/posts1322"}>post</NavLink>
      </p>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
