import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../util/http";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();
    const data = { email, password };
    if (!data) {
      alert("login details cannot be empty");
    }
    try {
      setLoading(true);
      const response = await login(data);
      localStorage.setItem("token", response.token);
      alert("login successful");
      navigate("/");
      setLoading(false);
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="w-full bg-[#ccc] h-[100vh] flex items-center justify-center">
      <form
        onSubmit={loginHandler}
        className="w-[30%] bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold text-[#222] text-center capitalize">
          Login here
        </h1>
        <hr />
        <div className="input-container">
          <label className="label">email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="input-container">
          <label className="label">password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="action">
          <button className="button">{loading ? "loading..." : "login"}</button>
        </div>
        <p className="text-base capitalize text-[#666] font-medium">
          don't have an account?{" "}
          <Link className="text-black" to="/register">
            sign up here
          </Link>
        </p>
      </form>
    </div>
  );
}
