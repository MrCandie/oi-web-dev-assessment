import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../../util/context";

export default function Header() {
  const auth = useContext(AuthContext);
  return (
    <header className="w-full bg-[#ccc] py-4 px-8 flex items-center justify-between">
      <Link to="/" className="uppercase font-bold text-black text-xl">
        OIBLOG
      </Link>
      <div className="flex items-center gap-8">
        <Link className="text-base font-semibold text-[#333] capitalize" to="/">
          home
        </Link>
        <Link
          className="text-base font-semibold text-[#333] capitalize"
          to={auth.isLoggedIn ? "/posts" : "/login"}
        >
          {auth.isLoggedIn ? "admin" : "login"}
        </Link>
        {auth.isLoggedIn && (
          <Link
            className="text-base font-semibold text-[#333] capitalize"
            to="/profile"
          >
            <AiOutlineUser />
          </Link>
        )}
      </div>
    </header>
  );
}
