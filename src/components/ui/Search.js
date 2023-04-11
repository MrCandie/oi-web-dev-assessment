import React from "react";

import { MdOutlineSearch } from "react-icons/md";
import { getAllPosts } from "../../util/http";

export default function Search({ setPosts }) {
  const token = localStorage.getItem("token");
  async function searchHandler(e) {
    try {
      const response = await getAllPosts(token);
      const filteredPost = response.posts.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.trim().toLowerCase())
      );
      setPosts(filteredPost);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-[60%] mx-auto p-4">
      <div className="flex border-2 bg-white rounded-xl p-2 items-center">
        <span className="text-base border-r-2 mr-4 p-3 text-black">
          <MdOutlineSearch />
        </span>
        <input
          type="search"
          onChange={searchHandler}
          className="flex-1 bg-transparent outline-none"
          placeholder="Enter Post Title"
        />
      </div>
    </div>
  );
}
