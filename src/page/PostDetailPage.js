import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetail from "../components/posts/PostDetail";
import { getAllPosts } from "../util/http";
import { AuthContext } from "../util/context";
import Login from "../components/auth/Login";

export default function PostDetailPage() {
  const params = useParams();
  const token = localStorage.getItem("token");
  const postId = params.id;

  const auth = useContext(AuthContext);

  const [postData, setPostData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllPosts(token);

        const postDetail = response.posts.find((item) => item._id === postId);
        setPostData(postDetail);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token, postId]);

  return (
    <Fragment>
      {auth.isLoggedIn ? <PostDetail post={postData} /> : <Login />}
    </Fragment>
  );
}
