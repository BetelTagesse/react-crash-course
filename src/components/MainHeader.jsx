import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage className={classes.icon} />
        React Forum
      </h1>
      <Link to="/create-post" className={classes.button}>
        <MdPostAdd size={18} className={classes.icon} />
        New Post
      </Link>
    </header>
  );
};

export default MainHeader;
