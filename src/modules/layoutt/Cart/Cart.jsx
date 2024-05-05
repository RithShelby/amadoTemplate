import React, { useReducer, useCallback, useState } from "react";
import imgCart1 from "../../../assets/image/1.jpg";
import imgCart2 from "../../../assets/image/2.jpg";
import imgCart5 from "../../../assets/image/5.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const handlePlus1 = () => {
    setCount1(count1 + 1);
  };
  const handleMinus1 = () => {
    setCount1(count1 - 1);
  };
  const handlePlus2 = () => {
    setCount2(count2 + 1);
  };
  const handleMinus2 = () => {
    setCount2(count2 - 1);
  };
  const handlePlus3 = () => {
    setCount3(count3 + 1);
  };
  const handleMinus3 = () => {
    setCount3(count3 - 1);
  };
  return (
    <div className="col-lg-9 col-md-12 mt-lg-5 ">
      <div className="row m-5 pt-5">
        <div className="col-lg-7 ">
          <h4 className="fs-4 animate__animated animate__slideInDown">
            Shopping Cart
          </h4>
          <table className="border-1 row ">
            <tbody>
              <tr className="bg-secondary table_head text-white text-center animate__animated animate__slideInDown">
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Price</th>
                <th>QTY</th>
              </tr>
              <tr className="text-center animate__animated animate__slideInUp">
                <td>
                  <img src={imgCart1} alt="" className="mt-4 img_table" />
                </td>
                <td>
                  <h1 className=" fs-6 mt-3">White Modern Chair</h1>
                </td>
                <td>
                  <h1 className=" fs-6 mt-3">130$</h1>
                </td>
                <td>
                  <div className="d-flex w-75 bg-light py-3 text-center m-auto qty-controls">
                    <p className=" m-auto ">QTY</p>
                    <button
                      className="btn btn-danger p-1"
                      onClick={handleMinus1}
                    >
                      -
                    </button>
                    <p className="m-auto qty">{count1}</p>
                    <button
                      className="btn btn-success p-1"
                      onClick={handlePlus1}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center animate__animated animate__slideInUp">
                <td>
                  <img src={imgCart2} alt="" className="mt-4 img_table" />
                </td>
                <td>
                  <h1 className=" fs-6 mt-3">White Modern Chair</h1>
                </td>
                <td>
                  <h1 className=" fs-6 mt-3">130$</h1>
                </td>
                <td>
                  <div className="d-flex w-75 bg-light py-3 text-center m-auto qty-controls">
                    <p className=" m-auto ">QTY</p>
                    <button
                      className="btn btn-danger p-1"
                      onClick={handleMinus2}
                    >
                      -
                    </button>
                    <p className="m-auto qty">{count2}</p>
                    <button
                      className="btn btn-success p-1"
                      onClick={handlePlus2}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center animate__animated animate__slideInUp">
                <td>
                  <img src={imgCart5} alt="" className="mt-4 img_table" />
                </td>
                <td>
                  <h1 className=" fs-6 mt-3">White Modern Chair</h1>
                </td>
                <td>
                  <h1 className=" fs-6 mt-3">130$</h1>
                </td>
                <td>
                  <div className="d-flex w-75 bg-light py-3 text-center m-auto qty-controls">
                    <p className=" m-auto ">QTY</p>
                    <button
                      className="btn btn-danger p-1"
                      onClick={handleMinus3}
                    >
                      -
                    </button>
                    <p className="m-auto qty">{count3}</p>
                    <button
                      className="btn btn-success p-1"
                      onClick={handlePlus3}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 p-5 bg-light h-75 mt-5 animate__animated animate__backInRight ">
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
          <div className="row mt-5">
            <Link to="/checkout" className="btn btn-warning rounded-0 py-3">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
