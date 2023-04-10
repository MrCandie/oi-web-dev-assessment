import React from "react";
import CommentItem from "./CommentItem";

export default function CommentList({ comments }) {
  return (
    <div className="mt-10">
      <div className="w-[40%] h-[80vh] max-h-[90vh] overflow-scroll mx-auto bg-[#eee] p-4 flex flex-col gap-4">
        {comments.map((item) => (
          <CommentItem item={item} />
        ))}
      </div>
    </div>
  );
}
