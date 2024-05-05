import { useFormik } from "formik";
import { useUsers } from "../core/hook";
const AddUser = () => {
  const { createUser } = useUsers();
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      dateOfBirth: "",
      status: "1",
      roleId: "1",
      bio: "",
    },
    onSubmit: (values) => {
      createUser(values);
    },
  });

  return (
    <div className="col-lg-10 text-center m-auto my-5">
      <h1 className="fw-bold ">Add User</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        {" "}
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="form-control w-50 p-3 mb-3 "
          placeholder="Enter username..."
        />
        <input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter name..."
        />
        <input
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className="form-control w-50 p-3 mb-3 "
          type="number"
          placeholder="Enter phone number..."
        />
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="form-control w-50 p-3 mb-3 "
          type="email"
          placeholder="Enter email..."
        />
        <input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="form-control w-50 p-3 mb-3 "
          type="password"
          placeholder="Enter password..."
        />
        <input
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter Address..."
        />
        <input
          name="dateOfBirth"
          onChange={formik.handleChange}
          value={formik.values.dateOfBirth}
          className="form-control w-50 p-3 mb-3 "
          type="date"
          placeholder="Enter DOB..."
        />
        <input
          name="status"
          onChange={formik.handleChange}
          value={formik.values.status}
          className="form-control w-50 p-3 mb-3 "
          type="number"
          placeholder="Enter Status..."
        />
        <input
          name="roleId"
          onChange={formik.handleChange}
          value={formik.values.roleId}
          className="form-control w-50 p-3 mb-3 "
          type="number"
          placeholder="Enter RoleID..."
        />
        <input
          name="bio"
          onChange={formik.handleChange}
          value={formik.values.bio}
          className="form-control w-50 p-3 mb-3 "
          type="text"
          placeholder="Enter Bio..."
        />
        <button className="btn btn-success w-25 py-2">Add now!</button>
      </form>
    </div>
  );
};

export default AddUser;
