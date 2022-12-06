import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="navbar-main">
      <div className="navbar-library-logo">
        <Link to="/">
          {" "}
          <IoLibraryOutline size={32} />
        </Link>
      </div>
      <div className="navbar-menus">
        <ul>
          <li>
            <Link className="act" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="act" to="/myBooks">
              My Books
            </Link>
          </li>
          <li>
            <Link className="act" to="/addBooks">
              All Books
            </Link>
          </li>
          <li>
            <Link className="act" to="/requestBooks">
              Request Books
            </Link>
          </li>
          <li>
            <Link className="act" to="/admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-logout-logo">
        <Link to="/login">
          {" "}
          <BiLogOut size={32} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
