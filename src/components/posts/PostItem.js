import React from "react";
import { Link } from "react-router-dom";

export default function PostItem({ item }) {
  return (
    <div className="w-[70%] mx-auto flex items-center gap-4 bg-white p-2 rounded-md drop-shadow-lg">
      <div className="w-[400px]">
        <img className="img h-[300px]" alt="featured" src={item.image} />
      </div>
      <div className="flex-1 h-[300px] gap-8 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-black uppercase text-start">
            {item.title}
          </h1>
          <p className="text-base font-normal text-[#333] capitalize text-start">
            {item.preview}
          </p>
        </div>
        <Link
          className="text-base capitalize text-blue-500 font-bold text-start"
          to={`/posts/${item._id}`}
        >
          read more
        </Link>
      </div>
    </div>
  );
}
