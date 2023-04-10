import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  return (
    <header className="w-full bg-[#ccc] py-4 px-8 flex items-center justify-between">
      <Link to="/" className="uppercase font-bold text-black text-xl">
        OI
      </Link>
      <div className="flex items-center gap-8">
        <Link
          className="text-base font-semibold text-[#333] capitalize"
          to="/posts"
        >
          admin
        </Link>
        <Link
          className="text-base font-semibold text-[#333] capitalize"
          to="/profile"
        >
          <AiOutlineUser />
        </Link>
      </div>
    </header>
  );
}
