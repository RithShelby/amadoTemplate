import React from "react";
import logoNav from "../../../assets/image/logo.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Narbarr = () => {
  let message = () => {
    Swal.fire({
      title: "Discount all Products 🤩",
    });
  };
  return (
    <>
      <div className="nav_bar nav_bar_shop col-lg-3 col-md-4 col-sm-12 py-5 ">
        {/*Logo */}
        <div className="row px-5">
          <div className="col-md-12 py-4">
            <img
              src={logoNav}
              alt=""
              className="ps-4 py-4 animate__animated animate__wobble"
            />
            {/*Navvigation*/}
            <nav className="navbar navbar-expand-lg ms-3 ps-4 mt-5 ">
              <ul className="navbar-nav flex-column animate__animated animate__fadeInLeftBig">
                <li className="nav-item d-flex flex-row mb-3">
                  <Link
                    className="nav-link fs-5 text-black position-relative "
                    href
                    to="/home"
                  >
                    Home
                    <span className="span_1"></span>
                  </Link>
                </li>
                <li className="nav-item d-flex flex-row mb-3">
                  <Link
                    className="nav-link fs-5 text-black position-relative"
                    href
                    to="/shop"
                  >
                    Shop
                    <span></span>
                  </Link>
                </li>
                <li className="nav-item d-flex flex-row mb-3">
                  <Link
                    className="nav-link fs-5 text-black position-relative"
                    href
                    to="/product"
                  >
                    Product
                    <span></span>
                  </Link>
                </li>
                <li className="nav-item d-flex flex-row mb-3">
                  <Link
                    className="nav-link fs-5 text-black position-relative"
                    href
                    to="/cart"
                  >
                    Cart
                    <span />
                  </Link>
                </li>
                <li className="nav-item d-flex flex-row mb-3">
                  <Link
                    className="nav-link fs-5 text-black position-relative"
                    href
                    to="/checkout"
                  >
                    Checkout
                    <span />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-12 d-flex flex-column pb-5 ms-4 animate__animated animate__fadeInLeftBig">
            <button
              className="btn btn-warning btn-nav rounded-0 py-3"
              onClick={message}
            >
              Discount 😍
            </button>

            <button className="btn btn-dark btn-nav rounded-0 py-3">
              New this week
            </button>
          </div>
          <div className="d-flex flex-column pb-5 m-auto ms-5 mt-3 animate__animated animate__fadeInLeftBig">
            <div className="col-md-12 text-start ">
              <a href="/cart/cart.html" className="nav-link d-flex mb-4">
                <i className="fa-solid fa-cart-shopping fs-3 text-secondary me-3" />
                <p className="p_nav">Cart</p>
                (0)
              </a>
            </div>
            <div className="col-md-12 text-start animate__animated animate__fadeInLeftBig">
              <a href="#" className="nav-link d-flex mb-4 ">
                <i className="fa-regular fa-star fs-3 text-secondary me-3" />
                <p className="p_nav">Favorite</p>
              </a>
            </div>
            <div className="col-md-12 text-start ">
              <a href="#" className="nav-link d-flex mb-4 ">
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
              </a>
            </div>
          </div>
          <div className="col-md-12 animate__animated animate__fadeInLeftBig">
            <div className="d-flex align-items-center ms-3">
              <i className="fa-brands fa-pinterest fs-3 text-dark me-3" />
              <i className="fa-brands fa-facebook fs-3 text-dark me-3" />
              <i className="fa-brands fa-instagram  fs-3 text-dark me-3" />
              <i className="fa-brands fa-x-twitter  fs-3 text-dark me-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Narbarr;
