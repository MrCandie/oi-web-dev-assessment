import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowNarrowLeft } from "react-icons/tb";
import Header from "../home/header/Header";
import EditComment from "./EditComment";
import { deleteComments } from "../../util/http";

export default function CommentDetail({ comment }) {
  const navigate = useNavigate();
  const [showEditComment, setShowEditComment] = useState(false);
  if (!comment) {
    return <p>Loading...</p>;
  }
  const author = comment.user.find((item) => item).name;

  const postTitle = comment.post.find((item) => item).title;

  const token = localStorage.getItem("token");

  async function deleteHandler() {
    const input = prompt("Type 'YES' to confirm post delete");
    if (input === "YES") {
      try {
        await deleteComments(token, comment._id);
        navigate("/comments");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("invalid input");
    }
  }

  return (
    <Fragment>
      <Header />
      <div className="mt-10">
        <div className="w-[40%] h-[80vh] max-h-[90vh] overflow-scroll mx-auto bg-[#eee] p-4 flex flex-col">
          <div className="w-full flex items-center justify-between">
            <Link
              to="/comments"
              className="text-base text-black cursor-pointer border rounded-full hover:shadow-lg transition-all duration-300 hover:bg-[#ccc] p-2"
            >
              <TbArrowNarrowLeft />
            </Link>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="wrap">
              <p className="wrap-text">author</p>
              <p className="wrap-text">{author}</p>
            </div>
            <div className="wrap">
              <p className="wrap-text">comment</p>
              <p className="wrap-text">{comment.comment}</p>
            </div>
            <div className="wrap">
              <p className="wrap-text">approved</p>
              <p className="wrap-text">{comment.approved ? "True" : "False"}</p>
            </div>
            <div className="wrap">
              <p className="wrap-text">created at</p>
              <p className="wrap-text">{comment.createdAt}</p>
            </div>
            <div className="wrap">
              <p className="wrap-text">post title</p>
              <p className="wrap-text">{postTitle}</p>
            </div>

            <div className="mt-10">
              <div className="action">
                <button
                  onClick={() => setShowEditComment(true)}
                  className="btn bg-yellow-600"
                >
                  edit comment
                </button>
                <button onClick={deleteHandler} className="btn bg-red-600">
                  delete comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showEditComment && (
        <EditComment
          setShowEditComment={setShowEditComment}
          comments={comment}
        />
      )}
    </Fragment>
  );
}
