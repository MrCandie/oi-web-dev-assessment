import React from "react";
import { Link } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";

export default function PostActions({ showPostModal }) {
  return (
    <div className="mt-16">
      <div className="action w-[70%] mx-auto">
        <button
          onClick={() => showPostModal(true)}
          className="bg-[#666] text-white text-xl p-2 rounded-lg hover:shadow-lg capitalize flex items-center gap-3 transition-all duration-300"
        >
          <IoMdAdd /> create new post
        </button>

        <Link
          to="/comments"
          className="btn bg-green-600 flex items-center justify-center"
        >
          manage comments
        </Link>
      </div>
    </div>
  );
}
