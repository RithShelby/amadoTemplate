import React from "react";
import { Outlet} from "react-router-dom";
import NavbarAPi from './NavbarAPi';
const LayoutAPI = () => {
  return (
    <div className="container-fluid">
        <div className="row">
        <NavbarAPi/>
        <Outlet />
        </div>
  
  </div>
  )
}

export default LayoutAPI;
