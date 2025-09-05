import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="andre" body="this is andre" />
      <Post author="bethany" body="this is beth" />
      <Post author="candlaria" body="this is candy" />
    </ul>
  );
};

export default PostsList;
