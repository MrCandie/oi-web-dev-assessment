import React, { Fragment } from "react";
import PostItem from "./PostItem";

export default function PostList({ posts }) {
  return (
    <Fragment>
      <div className="w-full flex bg-[#eee] p-10 max-h-[100vh] h-[92vh] overflow-scroll flex-col gap-8">
        {posts.map((item, i) => (
          <PostItem i={i} item={item} />
        ))}
      </div>
    </Fragment>
  );
}
