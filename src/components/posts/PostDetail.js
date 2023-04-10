import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { TbArrowNarrowLeft } from "react-icons/tb";
import Header from "../home/header/Header";
import AddComment from "./AddComment";
import Comments from "./comments/Comments";
import ModifyPost from "./ModifyPost";
import EditPost from "./EditPost";

export default function PostDetail({ post }) {
  const [show, setShow] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);
  if (!post) {
    return <p>loading...</p>;
  }

  const createdDate = new Date(post.createdAt);
  const day = createdDate.getDate().toString().padStart(2, 0);
  const month = (createdDate.getMonth() + 1).toString().padStart(2, 0);
  const year = createdDate.getFullYear();
  const minute = createdDate.getMinutes().toString().padStart(2, 0);
  const hour = createdDate.getHours().toString().padStart(2, 0);

  const user = post.user.find((item) => item).name;

  return (
    <Fragment>
      <Header />
      <div className="w-full  p-8 flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <Link
            to="/posts"
            className="text-base text-black cursor-pointer border rounded-full hover:shadow-lg transition-all duration-300 hover:bg-[#ccc] p-2"
          >
            <TbArrowNarrowLeft />
          </Link>
        </div>
        <div className="w-[60%] mx-auto flex flex-col gap-6">
          <div className="w-full p-4">
            <h1 className="text-3xl font-bold uppercase text-black text-center">
              {post.title}
            </h1>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-sm italic font-normal text-[#666] capitalize">
              published at {`${day}/${month}/${year}-${hour}:${minute}`}
            </p>
            <p className="text-sm italic font-normal text-[#666] capitalize">
              {user}
            </p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-sm italic font-normal text-[#666] capitalize">
              category: {post.categories}
            </p>
            <div className="max-w-[70%] flex items-center gap-2">
              Tags:{" "}
              {post.tags.map((item, i) => (
                <p
                  key={i}
                  className="text-sm italic font-normal text-[#666] capitalize"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="w-[full]">
            <img className="img h-[400px]" alt="post" src={post.image} />
          </div>
          <div className="w-[90%] mx-auto">
            <p className="text-base italic font-medium capitalize text-[#333]">
              {post.preview}
            </p>
          </div>
          <div className="w-full">
            <p className="text-base font-normal text-start">{post.text}</p>
          </div>
        </div>
        <div className="action w-[40%] mx-auto">
          <button onClick={() => setShow((prev) => !prev)} className="button">
            add comment
          </button>
          <button
            onClick={() => setShowComments((prev) => !prev)}
            className="button"
          >
            see all comment
          </button>
        </div>
        {showComments && <Comments post={post} />}
        {show && <AddComment setShow={setShow} post={post} />}
        <ModifyPost post={post} setShowEditPost={setShowEditPost} />
      </div>
      {showEditPost && (
        <EditPost setShowEditPost={setShowEditPost} post={post} />
      )}
    </Fragment>
  );
}
