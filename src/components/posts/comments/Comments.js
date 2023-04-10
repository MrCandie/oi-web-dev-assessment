import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { getPostComments } from "../../../util/http";

export default function Comments({ post }) {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPostComments(token, post._id);
        setComments(response.comments);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token, setComments, post]);
  return (
    <div className="w-[60%] mx-auto p-6">
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <div className="w-full flex items-center h-[10vh] justify-center">
          <p className="font-medium text-base capitalize text-[#333]">
            no comments found
          </p>
        </div>
      )}
    </div>
  );
}
