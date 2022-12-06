import React, { useState } from "react";
import { useEffect } from "react";
import man from "./man.jpg";
import profile from "./profile.png";
import "./style.css";
const Signup = () => {


  
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(Fname));
  });

  const onSub = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-main">
      <div className="picture">
        <img src={man} alt="man reading book" />
      </div>
      <div className="login-form">
        <form onSubmit={onSub}>
          <img src={profile} alt="profile" />
          <h1>Sign Up</h1>
          <div className="form">
            <div className="name">
              <input
                placeholder="First Name"
                type={"text"}
                value={Fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              <input
                placeholder="Last Name"
                type={"text"}
                value={Lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
            <input
              placeholder="E-mail"
              type={"email"}
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <input
              placeholder="Student id"
              type={"number"}
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
            <input
              placeholder="Address"
              type={"text"}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              type={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
