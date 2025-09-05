import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      <Modal>
        <NewPost
          onChangeAuthor={changeAuthorHandler}
          onChangeBody={changeBodyHandler}
        />
        <ul className={classes.posts}>
          <Post author={enteredAuthor} body={enteredBody} />
          <Post author="bethany" body="this is beth" />
          <Post author="candlaria" body="this is candy" />
        </ul>
      </Modal>
    </>
  );
};

export default PostsList;
