import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../util/http";

export default function ModifyPost({ setShowEditPost, post }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function deleteHandler() {
    const input = prompt("Type 'YES' to confirm post delete");
    if (input === "YES") {
      try {
        await deletePost(token, post._id);
        navigate("/posts");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("invalid input");
    }
  }

  return (
    <div className="mt-[10rem]">
      <div className="action w-[80%] mx-auto">
        <button
          onClick={() => setShowEditPost(true)}
          className="btn bg-yellow-600"
        >
          edit post
        </button>
        <button onClick={deleteHandler} className="btn bg-red-600">
          delete post
        </button>
      </div>
    </div>
  );
}
