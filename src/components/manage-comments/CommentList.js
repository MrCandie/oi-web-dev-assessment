import React from "react";
import CommentItem from "./CommentItem";

export default function CommentList({ comments }) {
  return (
    <div className="mt-10">
      {comments.length > 0 ? (
        <div className="w-[40%] h-[80vh] max-h-[90vh] overflow-scroll mx-auto bg-[#eee] p-4 flex flex-col gap-4">
          {comments.map((item, i) => (
            <CommentItem item={item} i={i} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center h-[30vh] justify-center">
          <p className="font-medium text-base capitalize text-[#333]">
            you currently have no commments
          </p>
        </div>
      )}
    </div>
  );
}
