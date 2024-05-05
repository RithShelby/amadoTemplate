import React from 'react'
import { Link } from "react-router-dom";
const NavbarAPi = () => {
  return (
    <nav className='col-lg-2 col-md-6 col-sm-12 bg_navbar text-white'>
      <div className='d-flex py-3'>
        <i className="fa-solid  fa-bag-shopping fs-3 m-auto"></i>
        <h1 className='fs-1 fw-bold m-auto'>My Form</h1>
      </div>
    <ul className='navbar-nav row'>
      <li className='nav-item'>
        <Link className='nav-link fs-4' href to="/">ListShop</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link fs-4' href to="/food">ListFood</Link>
      </li>
      <li className='nav-item btn btn-primary w-50 mt-3  rounded ms-4'>
        <Link className='nav-link ' href to="/userform"> <i class="fa-solid fa-plus "></i>Add more</Link>
      </li>
    </ul>
  </nav>
  )
}
export default NavbarAPi;
