import React from "react";
import FeaturedItem from "./FeaturedItem";

export default function FeaturedList({ posts }) {
  return (
    <div className="w-full flex bg-[#eee] p-10 max-h-[100vh] h-[92vh] overflow-scroll flex-col gap-8">
      {posts.map((item) => (
        <FeaturedItem item={item} />
      ))}
    </div>
  );
}
