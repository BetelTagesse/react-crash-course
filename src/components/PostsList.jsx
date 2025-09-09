import { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {posts.length === 0 && (
        <p style={{ textAlign: "center" }}>There are no posts here yet</p>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.author} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostsList;
