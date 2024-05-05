import React from 'react'
import img1 from "../../../assets/image/1.jpg"
import img2 from "../../../assets/image/5.jpg"
import img3 from "../../../assets/image/8.jpg"
import img4 from "../../../assets/image/2.jpg"
import img5 from "../../../assets/image/6.jpg"
import img6 from "../../../assets/image/9.jpg"
import img7 from "../../../assets/image/3.jpg"
import img8 from "../../../assets/image/4.jpg"
import img9 from "../../../assets/image/7.jpg"
const Home = () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 image_layout animate__animated animate__fadeInRightBig">
  {/*Col image 1*/}
  <div className="row rps_layout">
    <div className="col-lg-4 ">
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 180$</p>
              <p className="fs-3 text-dark fw-semibold">Modern Chair</p>
            </div>
            <img src={img1} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className=" d-flex flex-column text-start lh-1 p-5">
              <p className="border_text w-25" />
              <p className="">From 180$</p>
              <p className="fs-3 fw-semibold ">Modern Chair</p>
            </div>
          </a>
        </div>
      </div>
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link ">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 18$</p>
              <p className="fs-3 text-dark fw-semibold">Plant Port</p>
            </div>
            <img src={img2}alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 18$</p>
              <p className="fs-3 fw-semibold ">Plant Port</p>
            </div>
          </a>
        </div>
      </div>
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 310$</p>
              <p className="fs-3 text-dark fw-semibold">Modern Rocking </p>
            </div>
            <img src={img3}alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 310$</p>
              <p className="fs-3 fw-semibold">Modern Rocking Chair</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    {/*Col image 2*/}
    <div className="col-lg-4 img_2">
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 180$</p>
              <p className="fs-3 text-dark fw-semibold">
                Minimalistic Plant Port
              </p>
            </div>
            <img src={img4} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 180$</p>
              <p className="fs-3 fw-semibold ">Minimalistic Plant Port</p>
            </div>
          </a>
        </div>
      </div>
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link ">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 320$</p>
              <p className="fs-3 text-dark fw-semibold">Small Table</p>
            </div>
            <img src={img5} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 320$</p>
              <p className="fs-3 fw-semibold ">Small Table</p>
            </div>
          </a>
        </div>
      </div>
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link ">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 300$</p>
              <p className="fs-3 text-dark fw-semibold">Home Deco</p>
            </div>
            <img src={img6} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 300$</p>
              <p className="fs-3 fw-semibold ">Home Deco</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    {/*Col image 3*/}
    <div className="col-lg-4 img_3">
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link ">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 180$</p>
              <p className="fs-3 text-dark fw-semibold">Modern Chair</p>
            </div>
            <img src={img7} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 180$</p>
              <p className="fs-3 fw-semibold ">Modern Chair</p>
            </div>
          </a>
        </div>
      </div>
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 180$</p>
              <p className="fs-3 text-dark fw-semibold">Night Sand</p>
            </div>
            <img src={img8} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 180$</p>
              <p className="fs-3 fw-semibold ">Night Sand</p>
            </div>
          </a>
        </div>
      </div>
      <div className="image-container position-relative">
        <div className="image">
          <a href="" className="nav-link ">
            <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
              <p className="border_text w-25" />
              <p className="text-secondary">From 320$</p>
              <p className="fs-3 text-dark fw-semibold">Metallic Chair</p>
            </div>
            <img src={img9} alt="" className="w-100" />
          </a>
        </div>
        <div className="image_overlay">
          <a href="" className="nav-link">
            <div className="p-5 d-flex flex-column text-start lh-1">
              <p className="border_text w-25" />
              <p className="">From 320$</p>
              <p className="fs-3 fw-semibold">Metallic Chair</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home;
