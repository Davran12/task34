import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostProvider } from "./components/PostContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <Router>
      <PostProvider>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/posts1322" element={<PostDetails />} />
        </Routes>
      </PostProvider>
    </Router>
  );
};

export default App;
