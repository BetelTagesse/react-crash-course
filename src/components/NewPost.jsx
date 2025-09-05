import classes from "./NewPost.module.css";

const NewPost = ({ onChangeBody, onChangeAuthor }) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="name" required rows={3} onChange={onChangeBody} />
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={onChangeAuthor} />
      </p>
    </form>
  );
};

export default NewPost;
