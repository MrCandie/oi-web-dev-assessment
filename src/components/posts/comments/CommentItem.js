import React from "react";

export default function CommentItem({ item }) {
  const author = item.user.find((item) => item).name;
  return (
    <div className="w-full flex flex-col gap-2 rounded-xl p-2 bg-[#ccc] drop-shadow-lg">
      <p className="text-base font-medium capitalize italic">{author}</p>
      <div className="w-full flex items-end justify-end">
        <p className="text-base font-normal capitalize">{item.comment}</p>
      </div>
    </div>
  );
}
