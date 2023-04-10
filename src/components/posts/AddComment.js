import React, { useState } from "react";
import { addComment } from "../../util/http";

export default function AddComment({ post, setShow }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  async function commentHandler(e) {
    e.preventDefault();
    const data = { comment };

    try {
      setLoading(true);
      const response = await addComment(data, token, post._id);
      setLoading(false);
      alert("comment successfully added");
      setComment("");
      setShow(false);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message || "something went wrong");
      console.log(error);
    }
  }

  return (
    <div className="w-[40%] mx-auto border-4 rounded-lg p-8">
      <form onSubmit={commentHandler} className="w-full flex flex-col gap-4">
        {false && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input"
            placeholder="Enter Your Name"
            type="text"
          />
        )}
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="input"
          rows={3}
          placeholder="Leave a comment"
        />
        <div className="action">
          <button className="button">
            {loading ? "loading..." : "add comment"}
          </button>
        </div>
      </form>
    </div>
  );
}
