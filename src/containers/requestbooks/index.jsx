import React from "react";
import man from "./man.jpg";
import profile from "./profile.png";
const RequestBooks = () => {
  return (
    <div className="login-main">
      <div className="picture">
        <img src={man} alt="man reading book" />
      </div>
      <div className="login-form">
        <img src={profile} alt="profile" />
        <h1>Request Books</h1>
        <div className="form">
          
          <input placeholder="Department" type={"text"} />
          <input placeholder="Book Name" type={"text"} />
          <input placeholder="Book id" type={"number"} />
          <input placeholder="Author Name" type={"text"} />
          <input placeholder="Roll No" type={"text"} />
          
          
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default RequestBooks;
