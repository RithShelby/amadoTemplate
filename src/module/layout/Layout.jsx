import React from "react";
import { Outlet } from "react-router-dom";
import Footerr from "./Footer/Footer";
import MobileNav from "./Header/MobileNav";
import Narbarr from "./Header/Narbar";
const LayoutApp = () => {
  return (
    <div className="container-fluid-0">
      <div className="row">
        <MobileNav />
        <Narbarr />
        <Outlet />
        <Footerr />
      </div>
    </div>
  );
};

export default LayoutApp;
