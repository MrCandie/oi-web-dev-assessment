import React, { Fragment, useEffect, useState } from "react";
import User from "./User";
import Header from "../home/header/Header";
import EditProfile from "./EditProfile";
import { getProfile } from "../../util/http";

export default function Profile() {
  const [showEditProfile, setShowEditProfile] = useState(false);

  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfile(token);
        setProfile(response.profile);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token]);

  return (
    <Fragment>
      <Header />
      <div className="w-full p-10 flex items-center justify-center">
        <User user={profile} showEditModal={setShowEditProfile} />
      </div>

      {showEditProfile && (
        <EditProfile user={profile} showProfileModal={setShowEditProfile} />
      )}
    </Fragment>
  );
}
