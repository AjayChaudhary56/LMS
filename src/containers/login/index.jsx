import React, { useState, useEffect } from "react";
import man from "./man.jpg";
import profile from "./profile.png";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    username: { uname },
    password: { password },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="login-main">
      <div className="picture">
        <img src={man} alt="man reading book" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
       
          <img src={profile} alt="profile" />
          <h1>Login</h1>
          <h2>Username</h2>
          <input
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
            placeholder="Username"
            type={"text"}
          />

          <h2>Password</h2>

          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={"password"}
          />

          <button type="submit" value="submit">
            Login
          </button>

          <Link to="/signup">Don't have an Account?</Link>
       
      </form>
    </div>
  );
};

export default Login;
