import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../../image/user1.jpeg";
import { deleteProfile } from "../../util/http";
import { AuthContext } from "../../util/context";

export default function User({ showEditModal, user }) {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const token = localStorage.getItem("token");

  async function deleteHandler() {
    const input = prompt("Enter YES to delete account");
    if (input === "YES") {
      try {
        await deleteProfile(token);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("incorrect input");
    }
  }

  return (
    <div className="w-[60%] mx-auto shadow-xl p-4 flex flex-col gap-10">
      <div className="w-[200px] mx-auto">
        <img className="img rounded-full h-[200px]" alt="user" src={userImg} />
      </div>
      <div className="mt-24">
        <div className="action w-[80%] mx-auto">
          <button
            onClick={() => showEditModal(true)}
            className="btn bg-yellow-600"
          >
            edit profile
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="user-container">
          <p className="text">name</p>
          <p className="text">{user.name}</p>
        </div>
        <div className="user-container">
          <p className="text">email</p>
          <p className="text">{user.email}</p>
        </div>
        <div className="user-container">
          <p className="text">UID</p>
          <p className="text">dhjwdgfwhkfhkhgkfj</p>
        </div>
      </div>

      <div className="mt-24">
        <div className="action w-[80%] mx-auto">
          <button
            onClick={() => {
              auth.logout();
              navigate("/login");
            }}
            className="btn bg-yellow-600"
          >
            logout
          </button>
          <button onClick={deleteHandler} className="btn bg-red-600">
            delete profile
          </button>
        </div>
      </div>
    </div>
  );
}
