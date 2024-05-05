import React, { useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/styleAxios.css";
import "../src/assets/css/index1.css";
// import HomePage from "./modules/home/Home";
// import BlogPage from "./modules/blog/blog";
// import ContactPage from "./modules/contact/contact";
// import Login from "./modules/auth/component/Login";
// import PageNotFound from "./modules/error/error";
// import Layout from "./modules/layout/layout";
// import { useAuth } from "./modules/auth/core/hook";
// import { useSelector } from "react-redux";
// import Dashboard from "./modules/dashboard/Dashboard";
// import AddUser from "./modules/home/component/addUsers";
// import UpdateUser from "./modules/home/component/updateUser";
import RouterAmado from "./modules/Router/RouterAmado";
const App = () => {
  // const { token } = useSelector((state) => state.auth);
  // const { onGetProfile } = useAuth();

  // useEffect(() => {
  //   token && onGetProfile();
  //   // eslint-disable-next-line
  // }, [token]);

  return (
    <RouterAmado />
    // <BrowserRouter>
    //   <Routes>
    //     {token ? (
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="/user" element={<HomePage />} />
    //         <Route path="/add-user" element={<AddUser />} />
    //         <Route path={`update-user/:id`} element={<UpdateUser />} />
    //         <Route path="/blog" element={<BlogPage />} />
    //         <Route path="/contact" element={<ContactPage />} />
    //       </Route>
    //     ) : (
    //       <Route path="*" element={<Login />} />
    //     )}
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
};
export default App;
