import { useState } from "react";

import classes from "../components/NewPost.module.css";
import Modal from "../components/Modal";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }
  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault(e);
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);

    console.log(postData);
    onCancel();
  }
  return (
    <div>
      <Modal>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <p>
            <label htmlFor="body">Text </label>
            <textarea
              onChange={changeBodyHandler}
              id="body"
              name="body"
              required
              rows={3}
            />
          </p>

          <p>
            <label htmlFor="name">your name : </label>
            <input
              type="text"
              id="name"
              required
              onChange={changeAuthorHandler}
            ></input>
          </p>
          <p className={classes.actions}>
            <button type="button" onClick={onCancel}>
              cancel
            </button>
            <button>submit</button>
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default NewPost;
