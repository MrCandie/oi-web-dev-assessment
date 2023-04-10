import React, { Fragment, useContext } from "react";
import Profile from "../components/profile/Profile";
import { AuthContext } from "../util/context";
import Login from "../components/auth/Login";

export default function ProfilePage() {
  const auth = useContext(AuthContext);
  console.log(auth.isLoggedIn);
  return <Fragment>{auth.isLoggedIn ? <Profile /> : <Login />}</Fragment>;
}
