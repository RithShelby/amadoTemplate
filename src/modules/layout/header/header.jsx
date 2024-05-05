import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { AiOutlineSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  const [active, setActive] = useState("DASHBOARD");
  const handleActive = (e) => {
    setActive(e);
  };
  return (
    <nav
      className=" col-lg-2 text-white "
      style={{
        background: "#14213d",
      }}
    >
      <ul className="navbar-nav pt-5 position-sticky top-0">
        <li className="nav-item text-white ">
          <Link
            className={`nav-link rounded px-3  ${
              active == "DASHBOARD" ? "bg-light text-dark" : null
            }`}
            to="/"
            onClick={() => handleActive("DASHBOARD")}
          >
            <MdDashboardCustomize />
            OverView
          </Link>
        </li>
        <li className="nav-item text-white  ">
          <Link
            className={`nav-link rounded px-3  ${
              active == "USER" ? "bg-light text-dark" : null
            }`}
            to="/user"
            onClick={() => handleActive("USER")}
          >
            <FaBuildingUser />
            Users
          </Link>
        </li>
        <li className="nav-item text-white">
          <Link
            className={`nav-link rounded px-3  ${
              active == "ROLE" ? "bg-light text-dark" : null
            }`}
            to="/blog"
            onClick={() => handleActive("ROLE")}
          >
            <AiOutlineSetting />
            Roles
          </Link>
        </li>
        <li className="nav-item text-white">
          <Link
            className={`nav-link rounded px-3   ${
              active == "CONTACT" ? "bg-light text-dark" : null
            }`}
            to="/contact"
            onClick={() => handleActive("CONTACT")}
          >
            <MdAccountCircle />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
