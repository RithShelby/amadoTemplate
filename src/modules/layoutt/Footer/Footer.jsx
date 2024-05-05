import React from "react";
import logoFooter from "../../../assets/image/logo2.png";
const Footerr = () => {
  return (
    <div className="container-0-fluid ">
      <div className="row rps_footer">
        <div className="row p-5" style={{ backgroundColor: "#3c3c3c" }}>
          <div className="col-md-6 ps-5">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="text-white">Subscribe for a </h1>
                <h1 className="text-warning">25% Discount</h1>
              </div>
            </div>
            <p className="text-secondary">
              Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
              amet mi vulputate consectetur. Donec auctor interdum purus, ac
              finibus massa bibendum nec.
            </p>
          </div>
          <div className="col-md-6 ">
            <div className="d-flex justify-content-center pt-4">
              <input
                className="form-control w-100 py-3 rounded-0 px-3"
                type="email"
                placeholder="Your email ...."
              />
              <button className="btn btn-warning rounded-0 px-3 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="row p-5" style={{ backgroundColor: "#252525" }}>
          <div className="col-md-6 text-secondary d-flex flex-column align-items-center justify-content-end">
            <img className="align-items-start mb-3" src={logoFooter} alt="" />
            <p className="">
              Copyright ©2024 All rights reserved This template is made
            </p>
            <p>
              with by <i className="fa-solid fa-heart text-warning" />
              <a href="#" className="a_list text-secondary">
                Colorlib{" "}
              </a>
              &amp; Re-distributed by{" "}
              <a href="#" className="a_list text-secondary">
                Themewagon
              </a>
            </p>
          </div>
          <div className="col-md-6 text-white d-flex flex-row align-items-center justify-content-start ">
            <nav className="navbar navbar-expand-lg ">
              <i
                className="fa-solid fa-bars fs-1 text-warning navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></i>
              <div
                className="collapse navbar-collapse "
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav ">
                  <a className="nav-link text-warning me-2 fs-5" href="#">
                    Home
                  </a>
                  <a className="nav-link me-2 text-white fs-5" href="#">
                    Product
                  </a>
                  <a className="nav-link me-2 text-white fs-5" href="#">
                    Shop
                  </a>
                  <a className="nav-link me-2 text-white fs-5" href="#">
                    Cart
                  </a>
                  <a className="nav-link me-2 text-white fs-5" href="#">
                    Checkout
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerr;
