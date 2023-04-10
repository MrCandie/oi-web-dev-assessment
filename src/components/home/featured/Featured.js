import React, { useEffect, useState } from "react";
import FeaturedList from "./FeaturedList";
import { getAllPosts } from "../../../util/http";

export default function Featured() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllPosts(token);
        setPosts(response.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token]);
  return (
    <div className="w-full h-full">
      <FeaturedList posts={posts} />
    </div>
  );
}
