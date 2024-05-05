import React, { useState } from "react";
import img7 from "../../../assets/image/7.jpg";
import img2 from "../../../assets/image/2.jpg";
import img8 from "../../../assets/image/8.jpg";
import img6 from "../../../assets/image/6.jpg";
import img5 from "../../../assets/image/5.jpg";
import img1 from "../../../assets/image/1.jpg";
import { BiSolidCategory } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range from 0 to 100
  const [selectedPrice, setSelectedPrice] = useState([0, 30]); // Initial selected price range

  const handlePriceChange = (newPriceRange) => {
    setSelectedPrice(newPriceRange);
  };

  const formatPrice = (price) => {
    return `$${price}`;
  };

  const handleChange = (newRange) => {
    setSelectedPrice(newRange); // Update the selected price range
  };

  return (
    <div className="col-md-9 col-md-4 col-sm-12 ">
      <div className="row d-flex flex-column flex-md-row flex-column-reverse">
        <div className="col-lg-3 col-md-6 bg-light middle_layout mid_rps_layout animate__animated animate__slideInDown ">
          <div className="row mt-5 ">
            <div className="col-sm-12 text-center">
              <h5 className="text-start ms-5 mt-5 ">Catagories</h5>
              <h6 className="text-start  mt-5 ms-5 ps-5 text-warning">Chair</h6>
              <h6 className="text-start  mt-5 ms-5 ps-5  text-secondary">
                Beds
              </h6>
              <h6 className="text-start  mt-5 ms-5 ps-5  text-secondary">
                Accesories
              </h6>
              <h6 className="text-start  mt-5 ms-5 ps-5  text-secondary">
                Furniture
              </h6>
              <h6 className="text-start  mt-5 ms-5 ps-5  text-secondary">
                Home Deco
              </h6>
              <h6 className="text-start  mt-5 ms-5 ps-5  text-secondary">
                Dressings
              </h6>
              <h6 className="text-start  mt-5 ms-5 ps-5  text-secondary">
                Tables
              </h6>
            </div>
            <div className="col-sm-12">
              <h5 className="text-start ms-5 mt-5 ">Brands</h5>
              <div className="d-flex flex-column mt-3 ms-5 ps-5">
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#" className="nav-link">
                      Amado
                    </a>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#" className="nav-link">
                      The Factory
                    </a>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#" className="nav-link">
                      lkea
                    </a>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#" className="nav-link">
                      Furniture lnc
                    </a>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#" className="nav-link">
                      ArtDeco
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <h5 className="text-start ms-5 mt-5">Color</h5>
            </div>
            <div className="col-sm-12 icon_color d-flex ms-5 ">
              <a href="#" className="bg-danger " />
              <a href="#" className="bg-white" />
              <a href="#" className="bg-success" />
              <a href="#" className="bg-dark" />
            </div>
            <div className="col-sm-12 icon_color_1 d-flex ms-5">
              <a href="#" className="bg-primary" />
              <a href="#" className="bg-warning" />
              <a href="#" className="bg-light" />
              <a href="#" className="bg-secondary" />
            </div>
            <div className="col-sm-12 px-5 mt-5">
              <p>
                Price: {formatPrice(selectedPrice[0])} -{" "}
                {formatPrice(selectedPrice[1])}
              </p>
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={selectedPrice}
                min={priceRange[0]}
                max={priceRange[1]}
                onChange={handleChange}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </div>
          </div>
        </div>
        {/*image layout*/}
        <div className="col-lg-9 col-md-6 mt-5 pt-5 image_shop_rps animate__animated animate__slideInUp">
          <div className="row">
            <div className="col-sm-12">
              <h6 className="text-start ms-5 ">SHOWING 1-8 0F 25</h6>
            </div>
          </div>
          <div className="row pt-4 px-5">
            <div className="d-flex flex-column flex-md-row justify-content-between ">
              <div className="d-flex align-items-center ms-2 ">
                <BiSolidCategory className="me-2 text-warning fs-3" />
                <FaBagShopping className="fs-3 text-dark" />
              </div>
              {/*Select */}
              <div className="d-flex flex-row my-4">
                <div className="d-flex flex-row bg-light">
                  <h6 className="m-auto text-secondary ms-4 py-3">Sort by</h6>
                  <select
                    className="rounded-0 border-0 bg-light align-items-center fs-6 "
                    aria-label="Default select example"
                  >
                    <option selected="">Date</option>
                    <option value={1}>Newest</option>
                    <option value={2}>Popular</option>
                  </select>
                </div>
                <div className="d-flex flex-row bg-light ms-2">
                  <h6 className="m-auto text-secondary ms-3">View</h6>
                  <select
                    className="rounded-0 border-0 bg-light align-items-center fs-6"
                    aria-label="Default select example"
                  >
                    <option selected="">12</option>
                    <option value={1}>24</option>
                    <option value={2}>48</option>
                    <option value={3}>55</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Gallery */}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 px-5">
              {/*Image*/}
              <div className="col-sm-12 image_shop">
                <img src={img1} alt="" className="img_shop_default" />
                <img src={img5} alt="" className="img_shop_overlay" />
              </div>
              {/*Price & 5 star*/}
              <div className=" d-flex justify-content-between mt-3 name_five_star">
                <div className="col-sm-6 lh-sm ">
                  <p className="border_icon border-warning bg-warning " />
                  <p className="text-warning fs-4">180$</p>
                  <p className="fs-6 text-dark fw-semibold">Modern Chair</p>
                </div>
                <div className="col-sm-6 lh-sm text-end font_star text-warning">
                  <i className="fa-solid fa-star  " />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <div>
                    <a href="">
                      <i className="fa-solid fa-cart-shopping fs-4 text-dark mt-3" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Image*/}
              <div className="col-sm-12 image_shop">
                <img src={img7} alt="" className="img_shop_default" />
                <img src={img2} alt="" className="img_shop_overlay" />
              </div>
              {/*Price & 5 star*/}
              <div className=" d-flex justify-content-between mt-3 name_five_star">
                <div className="col-sm-6 lh-sm ">
                  <p className="border_icon border-warning bg-warning " />
                  <p className="text-warning fs-4">180$</p>
                  <p className="fs-6 text-dark fw-semibold">Modern Chair</p>
                </div>
                <div className="col-sm-6 lh-sm text-end font_star text-warning">
                  <i className="fa-solid fa-star  " />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <div>
                    <a href="">
                      <i className="fa-solid fa-cart-shopping fs-4 text-dark mt-3" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Image*/}
              <div className="col-sm-12 image_shop">
                <img src={img8} alt="" className="img_shop_default" />
                <img src={img6} alt="" className="img_shop_overlay" />
              </div>
              {/*Price & 5 star*/}
              <div className=" d-flex justify-content-between mt-3 name_five_star">
                <div className="col-sm-6 lh-sm ">
                  <p className="border_icon border-warning bg-warning " />
                  <p className="text-warning fs-4">180$</p>
                  <p className="fs-6 text-dark fw-semibold">Modern Chair</p>
                </div>
                <div className="col-sm-6 lh-sm text-end font_star text-warning">
                  <i className="fa-solid fa-star  " />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <div>
                    <a href="">
                      <i className="fa-solid fa-cart-shopping fs-4 text-dark mt-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 px-5">
              {/*Image*/}
              <div className="col-sm-12 image_shop">
                <img src={img5} alt="" className="img_shop_default" />
                <img src={img1} alt="" className="img_shop_overlay" />
              </div>
              {/*Price & 5 star*/}
              <div className=" d-flex justify-content-between mt-3 name_five_star">
                <div className="col-sm-6 lh-sm ">
                  <p className="border_icon border-warning bg-warning " />
                  <p className="text-warning fs-4">180$</p>
                  <p className="fs-6 text-dark fw-semibold">Modern Chair</p>
                </div>
                <div className="col-sm-6 lh-sm text-end font_star text-warning">
                  <i className="fa-solid fa-star  " />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <div>
                    <a href="">
                      <i className="fa-solid fa-cart-shopping fs-4 text-dark mt-3" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Image*/}
              <div className="col-sm-12 image_shop">
                <img src={img2} alt="" className="img_shop_default" />
                <img src={img7} alt="" className="img_shop_overlay" />
              </div>
              {/*Price & 5 star*/}
              <div className=" d-flex justify-content-between mt-3 name_five_star">
                <div className="col-sm-6 lh-sm ">
                  <p className="border_icon border-warning bg-warning " />
                  <p className="text-warning fs-4">180$</p>
                  <p className="fs-6 text-dark fw-semibold">Modern Chair</p>
                </div>
                <div className="col-sm-6 lh-sm text-end font_star text-warning">
                  <i className="fa-solid fa-star  " />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <div>
                    <a href="">
                      <i className="fa-solid fa-cart-shopping fs-4 text-dark mt-3" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Image*/}
              <div className="col-sm-12 image_shop">
                <img src={img6} alt="" className="img_shop_default" />
                <img src={img8} alt="" className="img_shop_overlay" />
              </div>
              {/*Price & 5 star*/}
              <div className=" d-flex justify-content-between mt-3 name_five_star">
                <div className="col-sm-6 lh-sm ">
                  <p className="border_icon border-warning bg-warning " />
                  <p className="text-warning fs-4">180$</p>
                  <p className="fs-6 text-dark fw-semibold">Modern Chair</p>
                </div>
                <div className="col-sm-6 lh-sm text-end font_star text-warning">
                  <i className="fa-solid fa-star  " />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <div>
                    <a href="">
                      <i className="fa-solid fa-cart-shopping fs-4 text-dark mt-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*pagination*/}
          <div className="row">
            <div className="col-12 d-flex  justify-content-center mt-5">
              <nav aria-label="Page navigation example ">
                <ul className="pagination  ">
                  <li className="page-item ">
                    <a className="page-link text-black p-3" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-black bg-warning p-3 "
                      href="#"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-black p-3" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-black p-3" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-black p-3" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-black p-3" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
