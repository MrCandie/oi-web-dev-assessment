import React, { useState } from "react";
import Popup from "../ui/Popup";
import { editProfile } from "../../util/http";

export default function EditProfile({ showProfileModal, user }) {
  const [name, setName] = useState(user.name ? user.name : "");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  async function profileHandler(e) {
    e.preventDefault();

    const data = {
      name,
      image,
    };

    try {
      setLoading(true);
      const response = await editProfile(token, data);
      console.log(response);
      alert("successful");
      setLoading(false);
      showProfileModal(false);
    } catch (error) {
      alert(error.response.data.message || "something went wrong");
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <Popup>
      <div className="w-full p-2 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-center text-[#333] capitalize">
          edit profile
        </h1>
        <hr />
        <form onSubmit={profileHandler} className="w-full flex flex-col gap-4">
          <div className="input-container">
            <label className="label">profile name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input"
              placeholder="Enter your name"
            />
          </div>
          <div className="input-container">
            <label className="label">email address</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled
              className="input"
            />
          </div>
          <div className="input-container">
            <label className="label">profile picture</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              className="input"
            />
          </div>
          <div className="action">
            <button
              onClick={() => showProfileModal(false)}
              type="button"
              className="button"
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
