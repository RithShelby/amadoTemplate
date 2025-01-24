import React from "react";
import mobileLogo from "../../../assets/image/logo.png";
import { Link } from "react-router-dom";
const MobileNav = () => {
  return (
    <div className="mobile_nav mobile_nav_shop mobile_nav_cart">
      <div className="justify-content-between p-3 align-items-center d-flex animate__animated animate__wobble">
        <img src={mobileLogo} alt="" />
        <i
          className="fa-solid fa-bars fs-1 text-warning "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        ></i>
      </div>
      <div
        className="offcanvas offcanvas-start w-75"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header py-4 ">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            {" "}
            <Link to="/home">
              <img
                src={mobileLogo}
                alt=""
                className="ps-4 py-4 animate__animated animate__wobble"
              />
            </Link>
          </h5>
          <button
            type="button"
            className="btn-close me-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <nav className="navbar navbar-expand-lg mt-4">
            <ul className="navbar-nav flex-column ms-5">
              <li className="nav-item d-flex flex-row">
                <Link
                  to=""
                  className="nav-link fs-5 text-black position-relative"
                  href="/index.html"
                >
                  Home
                  <span className="span_1"></span>
                </Link>
              </li>
              <li className="nav-item d-flex flex-row">
                <Link
                  to="/shop"
                  className="nav-link fs-5 text-black position-relative"
                >
                  Shop
                  <span></span>
                </Link>
              </li>
              <li className="nav-item d-flex flex-row">
                <Link
                  to="/product"
                  className="nav-link fs-5 text-black position-relative"
                >
                  Product
                  <span></span>
                </Link>
              </li>
              <li className="nav-item d-flex flex-row">
                <Link
                  to="/cart"
                  className="nav-link fs-5 text-black position-relative"
                >
                  Cart
                  <span />
                </Link>
              </li>
              <li className="nav-item d-flex flex-row">
                <Link
                  to="/checkout"
                  className="nav-link fs-5 text-black position-relative"
                >
                  Checkout
                  <span />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="row p-5">
            <div className="col-md-12 d-flex flex-column">
              <button className="btn btn-warning btn-nav rounded-0 py-3">
                %Discount
              </button>
              <button className="btn btn-dark btn-nav rounded-0 py-3">
                New this week
              </button>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-md-12 text-start ms-4 mt-3">
              <Link to="" className="nav-link d-flex ">
                <i className="fa-solid fa-cart-shopping fs-3 text-secondary me-3" />
                <p className="p_nav">Cart</p>
                (0)
              </Link>
            </div>
            <div className="col-md-12 text-start ms-4 mt-3">
              <Link to="" className="nav-link d-flex ">
                <i className="fa-regular fa-star fs-3 text-secondary me-3" />
                <p className="p_nav">Favorite</p>
              </Link>
            </div>
            <div className="col-md-12 text-start ms-4 mt-4 ">
              <Link to="" className="nav-link d-flex mb-4 ">
                <i
                  className="fa-solid fa-magnifying-glass fs-3 text-secondary me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                />
                <p
                  className="p_nav"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Search
                </p>
              </Link>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-12 ">
              <div className="d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-pinterest fs-3 text-dark me-3" />
                <i className="fa-brands fa-facebook fs-3 text-dark me-3" />
                <i className="fa-brands fa-instagram  fs-3 text-dark me-3" />
                <i className="fa-brands fa-x-twitter  fs-3 text-dark me-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
