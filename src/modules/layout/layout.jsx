import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./header/header";
import Navbar from "./header/navbar";

export const UserContext = createContext();

const Layout = () => {
  const [searchValue, setSearchvalue] = useState("");

  const handleSearch = (input) => {
    setSearchvalue(input);
  };

  return (
    <UserContext.Provider value={{ searchValue, handleSearch }}>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" style={{ background: "#ffffff" }}>
          <Header />
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
