import React, { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  posts: [],
  comments: [],
};

export const PostContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "GET_COMMENTS":
      return { ...state, comments: action.payload };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    dispatch({ type: "GET_POSTS", payload: response.data });
  };

  const addPost = async (newPost) => {
    const response = await axios.post("http://localhost:3001/posts", newPost);
    dispatch({ type: "ADD_POST", payload: response.data });
  };

  const getComments = async (postId) => {
    const response = await axios.get(
      `http://localhost:3001/comments?postId=${postId}`
    );
    dispatch({ type: "GET_COMMENTS", payload: response.data });
  };

  const addComment = async (newComment) => {
    const response = await axios.post(
      "http://localhost:3001/comments",
      newComment
    );
    dispatch({ type: "ADD_COMMENT", payload: response.data });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        comments: state.comments,
        getPosts,
        addPost,
        getComments,
        addComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
