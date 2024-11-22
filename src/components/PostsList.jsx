/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const res = await fetch("http://localhost:8080/posts");
      const resData = await res.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-Type": "application/json",
      },
    });
    console.log(postData);
    setPosts((existingPosts) => [postData, ...existingPosts]);
    console.log(postData);
  }
  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}{" "}
      {!isFetching && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>there are no paragraghs yet</h2>
        </div>
      )}
      {isFetching && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
