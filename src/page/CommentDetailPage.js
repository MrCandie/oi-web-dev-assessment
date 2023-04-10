import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentDetail from "../components/manage-comments/CommentDetail";
import { AuthContext } from "../util/context";
import { getAllComments } from "../util/http";

export default function CommentDetailPage() {
  const params = useParams();
  const commentId = params.id;

  const token = localStorage.getItem("token");

  const auth = useContext(AuthContext);

  const [commentData, setCommentData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllComments(token);

        const commentDetail = response.comments.find(
          (item) => item._id === commentId
        );
        setCommentData(commentDetail);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token, commentId]);

  return <CommentDetail comment={commentData} />;
}
