import React, { Fragment } from "react";
import FeaturedItem from "./FeaturedItem";

export default function FeaturedList({ posts }) {
  return (
    <div className="w-full flex bg-[#eee] p-10 max-h-[100vh] h-[92vh] overflow-scroll flex-col gap-8">
      {posts.length > 0 ? (
        <Fragment>
          {posts.map((item, i) => (
            <FeaturedItem i={i} item={item} />
          ))}
        </Fragment>
      ) : (
        <div className="w-full flex items-center h-[30vh] justify-center">
          <p className="font-medium text-base capitalize text-[#333]">
            wait patiently while we fetch your posts
          </p>
        </div>
      )}
    </div>
  );
}
