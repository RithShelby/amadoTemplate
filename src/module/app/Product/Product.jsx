import React, { useState } from "react";
import imgPro1 from "../../../assets/image/1.jpg";
import imgPro2 from "../../../assets/image/2.jpg";
import imgPro5 from "../../../assets/image/5.jpg";
import imgPro8 from "../../../assets/image/8.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleTabClick = (index, imgSrc, isThumbnail) => {
    setActiveIndex(index);
    if (!isThumbnail) {
      setModalImageSrc(imgSrc);
      setModalOpen(true); // Open the modal when clicking on the main image
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleWindowClick = (event) => {
    if (event.target.parentElement.id === "myModal") {
      setModalOpen(false);
    }
  };

  return (
    <div className="col-lg-9 col-md-6 mt-5">
      <div className="row">
        <nav aria-label="breadcrumb" className=" mt-5 animate__fadeInRightBig">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item active text-dark fs-6">HOME</li>
            <li
              className="breadcrumb-item active text-dark fs-6"
              aria-current="page"
            >
              FURNITURE
            </li>
            <li
              className="breadcrumb-item active text-dark fs-6"
              aria-current="page"
            >
              CHAIR
            </li>
            <li className="breadcrumb-item active fs-6" aria-current="page">
              WHITE MODERN CHAIR
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 px-5">
          <div className="row">
            <div className="col-md-12 p-4">
              <div className="row">
                {[imgPro1, imgPro2, imgPro5, imgPro8].map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`col-sm-12 img_big_product ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-100 h-auto animate__animated animate__slideInDown"
                      onClick={() => handleTabClick(index, imgSrc, false)} // Pass false as isThumbnail for main images
                    />
                  </div>
                ))}
              </div>
              <div className="row mt-3 ">
                {[imgPro1, imgPro2, imgPro5, imgPro8].map((imgSrc, index) => (
                  <a
                    key={index}
                    href="#"
                    className="img_small_product col-3 col-md-3 position-relative"
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-100 h-75"
                      onClick={() => handleTabClick(index, imgSrc, true)} // Pass true as isThumbnail for thumbnail images
                    />
                    <div
                      className={`box border border-2 border-warning position-absolute w-100 h-75 top-0 ${
                        activeIndex === index ? "active" : ""
                      }`}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-4 px-5 lh-1 animate__animated animate__fadeInRightBig">
          <div className="row m-auto">
            <p className="border_text w-25"></p>
            <p className="text-warning fs-2">180$</p>
            <p className="fs-3 text-dark fw-semibold">White Modern Chair</p>
          </div>
          <div className="d-flex justify-content-between m-auto">
            <div className="font_star text-warning">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <a href="#" className="nav-link fs-6 text-secondary">
              Write a review
            </a>
          </div>
          <div className="m-auto mt-3 d-flex">
            <i className="fa-solid fa-circle fs-6 text-success"></i>
            <p className="text-secondary ms-2">In Stock</p>
          </div>
          <div className="row m-auto mt-5">
            <p className="text-secondary fs-5 lh-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              maxime natus repellendus, aperiam fuga recusandae neque ipsa nisi
              autem est obcaecati similique tempora iste itaque fugit officiis
              mollitia, accusantium illum?
            </p>
          </div>
          {/* Input type number */}
          <div className="row pt-4">
            <div className="d-flex flex-row bg-light w-25">
              <h6 className="m-auto text-secondary ms-4 py-3">QTY</h6>
              <input
                type="number"
                className="form-control border-0 bg-light ms-5 py-3 text-secondary"
                defaultValue={1}
              />
            </div>
          </div>
          {/* Button add to cart */}
          <div className="row pt-5">
            <Link
              to="/cart"
              className="btn btn-warning rounded-0 py-4 fs-5 w-50"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
