import React from "react";
import Delivery from "../../../assets/image/giphy.gif";
import Wink from "../../../assets/image/Wing-Bank-WIngmall-Logo-01-scaled.jpg";
import ABA from "../../../assets/image/aba-web-top-logo.png";

const Checkout = () => {
  return (
    <div className="col-lg-9 ">
      <div className="row m-5 pt-5 ">
        <div className="col-lg-7 animate__animated animate__zoomInDown ">
          <form action="" className=" p-3 mx-3 ">
            <div className="row">
              <h1 className="fs-4">Checkout</h1>
            </div>
            <div className="row">
              <div className="col-md-6 pb-3 w-100">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light"
                  placeholder="FirstName..."
                />
              </div>
              <div className="col-md-6 pb-3 w-100">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="LastName..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pb-3">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="CompanyName..."
                />
              </div>
              <div className="col-md-12 pb-3">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="Email..."
                />
              </div>
              <div className="col-md-12 pb-3">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="CompanyName..."
                />
              </div>
              <div className="col-md-12 pb-3">
                <select className="form-select rounded-0 p-3 border-0 bg-light">
                  <option value={1}>CAMBODIA</option>
                  <option value={2}>USA</option>
                  <option value={3}>ENGLAND</option>
                  <option value={4}>FRANCE</option>
                  <option value={5}>SWITZERLAND</option>
                  <option value={6}>AUSTRALIA</option>
                  <option value={7}>CANADA</option>
                </select>
              </div>
              <div className="col-md-12 pb-3">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="Address..."
                />
              </div>
              <div className="col-md-12 pb-3">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="Town..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pb-3 w-100 ">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="ZipCode..."
                />
              </div>
              <div className="col-md-6 pb-3 w-100">
                <input
                  type="number"
                  className="form-control rounded-0 p-3 border-0 bg-light "
                  placeholder="PhoneNum..."
                />
              </div>
            </div>
            <div className="row">
              <textarea
                className="form-control rounded-0 p-3 border-0 bg-light "
                placeholder="Leave comment about your order"
                defaultValue={""}
              />
            </div>
            <div className="row ms-3 mt-3">
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="checkbox"
                  defaultChecked=""
                />
                <label className="form-check-label text-secondary">
                  Create an accout
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input  " type="checkbox" />
                <label className="form-check-label text-secondary">
                  Ship to a different address
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 bg-light p-4 mt-5 h-75 ">
          <div className="row ">
            <h1 className="fs-5 ">Cart Total</h1>
          </div>
          <div className=" d-flex justify-content-between">
            <p>Sub Total :</p>
            <p>$130.00</p>
          </div>
          <div className=" d-flex justify-content-between">
            <p>Delivery :</p>
            <p>Free</p>
          </div>
          <div className=" d-flex justify-content-between">
            <p>Total</p>
            <p>$130.00</p>
          </div>
          <div className="row ms-3 mt-3">
            <div className="form-check ">
              <input
                className="form-check-input "
                type="checkbox"
                defaultValue=""
                defaultChecked=""
              />
              <label className="form-check-label text-secondary">
                Cash on Delivery
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input "
                type="checkbox"
                defaultValue=""
              />
              <label className="form-check-label text-secondary d-flex">
                <img className="me-2" src={ABA} alt="" style={{ width: 20 }} />
                ABA
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
              />
              <label className="form-check-label text-secondary d-flex">
                <img className="me-2" src={Wink} alt="" style={{ width: 20 }} />
                Wing Bank
              </label>
            </div>
          </div>
          <div className="row mt-5">
            {/* <button class="btn btn-warning" onclick="alert('Hello crush!!!')">Checked out</button> */}
            <a
              href="#"
              className="btn btn-warning rounded-0 py-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Check Out
            </a>
            {/* Modal */}
            <div
              className="modal fade p-5 animate__animated animate__slideInDown"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content p-5">
                  <div className="modal-header">
                    <div
                      className="modal-title fs-5 w-100 d-flex justify-content-between img_modal"
                      id="exampleModalLabel"
                    >
                      <img className="img_animation" src={Delivery} />
                      <i className="fa-solid fa-location-dot mt-4 me-4 text-warning" />
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body text-center fs-5 fw-bold">
                    <p>Hope y'all like our Staff 😍</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
