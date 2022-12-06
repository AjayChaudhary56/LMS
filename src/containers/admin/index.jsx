import React from "react";
import man from "./man.jpg";
import profile from "./profile.png";
import './style.css'





const RequestBooks = () => {
  return (
    <div className="login-main1">
      <div className="picture">
        <img src={man} alt="man reading book" />
      </div>
      <div className="login-form1">
        <img src={profile} alt="profile" />
        <h1>Add Books</h1>
        <div className="form">
          <input placeholder="Department" type={"text"} />
          <input placeholder="Book Name" type={"text"} />
          <input placeholder="Book id" type={"number"} />
          <input placeholder="Author Name" type={"text"} />
      
        </div>
        <div className="files">
          <input placeholder="Picture" type={"file"} />
        </div>
        <button>Add Book</button>
      </div>
    </div>
  );
};

export default RequestBooks;
