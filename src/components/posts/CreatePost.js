import React, { useState } from "react";
import Popup from "../ui/Popup";
import { createPost } from "../../util/http";

import { MdOutlineAdd } from "react-icons/md";

export default function CreatePost({ showPostModal }) {
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const [category, setCategories] = useState("tech");

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  function tagHandler() {
    setTagList((prevTag) => [tag, ...prevTag]);
    setTag("");
  }

  async function postHandler(e) {
    e.preventDefault();
    const data = {
      title,
      preview,
      image,
      text,
      categories: category,
      tags: tagList,
    };

    try {
      setLoading(true);
      const response = await createPost(data, token);
      alert("post uploaded successfully");
      setLoading(false);
      showPostModal(false);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message || "something went wrong");
      console.log(error);
    }
  }

  return (
    <Popup>
      <div className="w-full p-2 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-center text-[#333] capitalize">
          create and publish a new post
        </h1>
        <hr />
        <form onSubmit={postHandler} className="w-full flex flex-col gap-4">
          <div className="input-container">
            <label className="label">title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="input"
              placeholder="Enter post title"
            />
          </div>
          <div className="input-container">
            <label className="label">post preview</label>
            <textarea
              onChange={(e) => setPreview(e.target.value)}
              value={preview}
              rows={2}
              className="input"
              placeholder="Enter post preview"
            />
          </div>
          <div className="input-container">
            <label className="label">cover image</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              className="input"
            />
          </div>
          <div className="input-container">
            <label className="label">post content</label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              rows={4}
              className="input"
              placeholder="Enter post content"
            />
          </div>

          <div className="input-container">
            <label className="label">select post category</label>
            <select
              onChange={(e) => setCategories(e.target.value)}
              className="input"
            >
              <option value="tech">Tech</option>
              <option value="business">business</option>
              <option value="lifestyle">lifestyle</option>
              <option value="relationship">relationship</option>
            </select>
          </div>

          <div className="input-container">
            <label className="label">add tag</label>
            <div className="input flex items-center">
              <input
                type="text"
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                className="border-none outline-none bg-transparent flex-1"
                placeholder="Enter tag"
              />
              <button
                type="button"
                onClick={tagHandler}
                className="btn bg-green-500"
              >
                <MdOutlineAdd />
              </button>
            </div>
          </div>
          <div className="w-full flex items-center flex-wrap gap-2">
            {tagList.map((item, i) => (
              <p
                onClick={() => tagList.splice(i)}
                key={i}
                className="p-2 cursor-pointer bg-green-200 rounded-lg "
              >
                {item}
              </p>
            ))}
          </div>
          <div className="action">
            <button
              onClick={() => showPostModal(false)}
              type="button"
              className="button"
            >
              cancel
            </button>
            <button className="button">
              {loading ? "loading..." : "post"}
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
}
