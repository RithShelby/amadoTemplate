import React, { useContext } from "react";
import { FaHotel } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineNotifications } from "react-icons/md";
import profile from "../../../assets/image/Profile.png";
import { UserContext } from "../layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { searchValue, handleSearch } = useContext(UserContext);

  return (
    <div
      className="col-lg-12  text-dark p-3 bg-light  "
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="row">
        <div className="col-lg-6 d-flex m-auto align-items-center ">
          <FaHotel className="text-dark fs-2" />
          <p className="mt-2 ms-5 text-dark fw-bold fs-4">
            Hotel Managment System
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center  ">
          <button
            style={{ width: "20%", background: "#14213d" }}
            className="btn text-white h-100 rounded-5  "
          >
            Share
          </button>
          <input
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className="form-control border border-1 border-dark rounded-5 h-100 mx-4 w-50"
            type="search "
            placeholder="Search Here..."
          />
          <LuMessageCircle className="text-dark fs-3 " />
          <MdOutlineNotifications className="text-dark fs-3 mx-3" />
          <Link to="/contact">
            {" "}
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className=""
              src={profile}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
