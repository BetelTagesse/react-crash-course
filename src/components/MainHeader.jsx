import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage className={classes.icon} />
        React Forum
      </h1>
      <button className={classes.button} onClick={onCreatePost}>
        <MdPostAdd size={18} className={classes.icon} />
        New Post
      </button>
    </header>
  );
};

export default MainHeader;
