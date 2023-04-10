import React, { useState } from "react";
import Popup from "../ui/Popup";
import { updateComments } from "../../util/http";

export default function EditComment({ comments, setShowEditComment }) {
  const [comment, setComment] = useState(
    comments.comment ? comments.comment : ""
  );
  const [approved, setApproved] = useState(true);

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  async function editHandler(e) {
    e.preventDefault();
    const data = {
      comment,
      approved,
    };
    console.log(data);
    try {
      setLoading(true);
      await updateComments(token, data, comments._id);
      setLoading(false);
      alert("update successful");
      setShowEditComment(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <Popup>
      <div className="w-full p-2 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-center text-[#333] capitalize">
          edit post
        </h1>
        <hr />
        <form onSubmit={editHandler} className="w-full flex flex-col gap-4">
          <div className="input-container">
            <label className="label">comment</label>
            <input
              className="input"
              placeholder="Enter new comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </div>
          <div className="input-container">
            <label className="label">approve</label>
            <select
              className="input"
              onChange={(e) => setApproved(e.target.value)}
            >
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
          </div>
          <div className="action">
            <button
              onClick={() => setShowEditComment(false)}
              className="button"
              type="button"
            >
              cancel
            </button>
            <button className="button">
              {loading ? "loading..." : "update"}
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
}
