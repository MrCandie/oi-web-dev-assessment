import React, { useEffect, useState } from "react";
import FeaturedList from "./FeaturedList";
import { getAllPosts } from "../../../util/http";
import Search from "../../ui/Search";
import Pagination from "../../ui/Pagination";

export default function Featured() {
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPost] = useState([]);
  const token = localStorage.getItem("token");

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllPosts(token);
        setTotalPost(response.posts);
        const currentPost = response.posts.slice(firstPostIndex, lastPostIndex);
        setPosts(currentPost);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token, firstPostIndex, lastPostIndex]);

  return (
    <div className="w-full pb-10 bg-[#eee] h-full">
      <Search setPosts={setPosts} />
      <FeaturedList posts={posts} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPost={totalPost.length}
        postPerPage={postPerPage}
      />
    </div>
  );
}
