import React, { useState, useEffect } from "react";
import Header from "../home/header/Header";
import CommentList from "./CommentList";
import { getAllComments } from "../../util/http";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllComments(token);
        setComments(response.comments);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token, setComments]);

  return (
    <div className="w-full">
      <Header />
      <CommentList comments={comments} />
    </div>
  );
}
