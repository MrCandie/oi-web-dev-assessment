import React, { Fragment, useContext } from "react";
import Post from "../components/posts/Post";
import { AuthContext } from "../util/context";
import Login from "../components/auth/Login";

export default function PostPage() {
  const auth = useContext(AuthContext);
  return <Fragment>{auth.isLoggedIn ? <Post /> : <Login />}</Fragment>;
}
