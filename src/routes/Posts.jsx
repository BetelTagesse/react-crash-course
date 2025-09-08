import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <main>
        <PostsList />
      </main>

      {/* 👇 Modal outlet, will render NewPost when path matches */}
      <Outlet />
    </>
  );
};

export default Posts;
