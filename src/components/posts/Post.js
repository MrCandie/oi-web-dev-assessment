import React, { Fragment, useEffect, useState } from "react";
import Header from "../home/header/Header";
import PostList from "./PostList";
import { getUserPosts } from "../../util/http";
import PostActions from "./PostActions";
import CreatePost from "./CreatePost";
import Search from "../ui/Search";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserPosts(token);
        setPosts(response.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token]);
  return (
    <Fragment>
      <div className="w-full bg-[#eee]">
        <Header />
        <Search setPosts={setPosts} />
        <div className="my-10">
          <PostActions showPostModal={setShowPostModal} />
        </div>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <div className="w-full flex items-center h-[30vh] justify-center">
            <p className="font-medium text-base capitalize text-[#333]">
              you currently have no posts
            </p>
          </div>
        )}
      </div>
      {showPostModal && <CreatePost showPostModal={setShowPostModal} />}
    </Fragment>
  );
}
