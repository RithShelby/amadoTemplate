import React, { useState } from "react";
import { useAuth } from "../core/hook";

const Login = () => {
  const [payload, setPayload] = useState({
    username: "super admin",
    password: "123",
  });

  const { onLogin } = useAuth();

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(payload);
  };

  return (
    <div
      className="col-lg-12 m-auto mt-5 rounded-5"
      style={{ background: "#edf2f4", width: "90%", height: "500px" }}
    >
      <form
        className=" d-flex flex-column text-center align-items-center py-5"
        onSubmit={handleSubmit}
        action=""
      >
        <p className="fs-3 fw-bold">Login</p>
        <p>Please enter username and password!</p>
        <input
          className="form-control mb-3 w-50 py-3"
          onChange={handleChange}
          type="text"
          required
          placeholder="Enter UserName...."
        />
        <input
          className="form-control w-50 py-3"
          onChange={handleChange}
          type="password"
          required
          placeholder="Enter Password...."
        />
        <p>forgot password?</p>
        <button className="btn btn-primary w-25">Login</button>
      </form>
    </div>
  );
};

export default Login;
