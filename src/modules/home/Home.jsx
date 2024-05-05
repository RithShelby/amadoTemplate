import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
// import { UserContext } from "../../layout/layout";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useUsers } from "./core/hook";
import { useSelector } from "react-redux";
// import useGet from "../layout/header/useGet";

const HomePage = () => {
  const { id } = useParams();
  const { getUsers } = useUsers();
  const { list, loading } = useSelector((state) => state.users);
  useEffect(() => {
    getUsers();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Delete Success!");
      })
      .catch((err) => {
        console.log(err);
        alert("Delete Error !");
      });
  };
  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <div className="spinner-border" role="status" />
      </div>
    );
  return (
    <div className="col-lg-10 m-auto mt-3 table-responsive">
      <Link to="/add-user">
        <button
          className="btn text-light rounded-5 p-3 my-4"
          style={{
            background: "#14213d",
            width: "15%",
          }}
        >
          Add more
        </button>
      </Link>
      <table className="table table-light table-striped table-hover mb-0 text-center">
        <thead>
          <tr className="fs-5">
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>BIO</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => {
            return (
              <tr key={user.id} className="">
                <td className="p-3  ">{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.bio}</td>
                <td>
                  <Link to={`/update-user/${user.id}`}>
                    <FiEdit style={{ color: "#0077b6" }} className="fs-4 " />
                  </Link>
                  <MdOutlineDeleteOutline
                    onClick={() => handleDelete(user.id)}
                    className="fs-3 text-danger"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
