import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommentItem({ item }) {
  const navigate = useNavigate();
  const author = item.user.find((item) => item).name;
  return (
    <div
      onClick={() => navigate(`/comments/${item._id}`)}
      className="w-full cursor-pointer hover:opacity-80 hover:drop-shadow-lg transition-all duration-300 flex flex-col gap-2 rounded-xl p-2 bg-[#ccc] drop-shadow-lg"
    >
      <p className="text-base font-medium capitalize italic">{author}</p>
      <div className="w-full flex items-end justify-end">
        <p className="text-base font-normal capitalize">{item.comment}</p>
      </div>
    </div>
  );
}
