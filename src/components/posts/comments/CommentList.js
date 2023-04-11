import React from "react";
import CommentItem from "./CommentItem";

export default function CommentList({ comments }) {
  return (
    <div className="w-full max-h-[40vh] overflow-scroll flex flex-col gap-4">
      {comments.map((item, i) => (
        <CommentItem item={item} i={i} />
      ))}
    </div>
  );
}
