import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../core/hook";
import { useSelector } from "react-redux";
const UpdateUser = () => {
  const { id } = useParams();
  return (
    <div className="col-lg-10 my-5">
      <h1 className="text-center fs-2 mb-5">Update Users</h1>
      <form
        // onSubmit={handleSubmit}
        action=""
        className="d-flex flex-column align-items-center"
      >
        <input
          type="text"
          name="username"
          // value={updateUser.username || ""}
          // onChange={handleChange}
          className="form-control w-50 p-3 mb-3 "
          placeholder="Enter username..."
        />
        <input
          name="name"
          // onChange={handleChange}
          // value={updateUser.name || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter name..."
        />
        <input
          name="phone"
          // onChange={handleChange}
          // value={updateUser.phone || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter phone number..."
        />
        <input
          name="email"
          // onChange={handleChange}
          // value={updateUser.email || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter email..."
        />
        <input
          name="password"
          // onChange={handleChange}
          // value={updateUser.password || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter password..."
        />
        <input
          name="adress" // Corrected typo
          // onChange={handleChange}
          // value={updateUser.adress || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter Address..."
        />
        <input
          name="dateOfBirth"
          // onChange={handleChange}
          // value={updateUser.dateOfBirth || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter DOB..."
        />
        <input
          name="status"
          // onChange={handleChange}
          // value={updateUser.status || ""}
          className="form-control w-50 p-3 mb-3 "
          type="number"
          placeholder="Enter Status..."
        />
        <input
          name="roleId"
          // onChange={handleChange}
          // value={updateUser.roleId || ""}
          className="form-control w-50 p-3 mb-3 "
          type="number"
          placeholder="Enter RoleID..."
        />
        <input
          name="bio"
          // onChange={handleChange}
          // value={updateUser.bio || ""}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter Bio..."
        />
        <button className="btn btn-success w-25 py-2">Add now!</button>
      </form>
      {/* {id} {updateUser.name} */}
    </div>
  );
};

export default UpdateUser;
