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

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
