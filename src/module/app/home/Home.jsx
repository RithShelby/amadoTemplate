import React from "react";
import HomeData from "../../data/HomeData";
const Home = () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 image_layout animate__animated animate__fadeInRightBig">
      <div className="row rps_layout">
        {HomeData.map((item, index) => (
          <div key={item.id} className="col-lg-4">
            <div className="image-container position-relative">
              <div className="image">
                <a href="" className="nav-link">
                  <div className="d-flex flex-column text-start lh-1 position-absolute p-5">
                    <p className="border_text w-25" />
                    <p className="text-secondary">{item.price}</p>
                    <p className="fs-3 text-dark fw-semibold">{item.title}</p>
                  </div>
                  <img src={item.img} alt={item.title} className="w-100" />
                </a>
              </div>
              <div className="image_overlay w-100">
                <a href="" className="nav-link">
                  <div className="p-5 d-flex flex-column text-start lh-1">
                    <p className="border_text w-25" />
                    <p>{item.price}</p>
                    <p className="fs-3 fw-semibold">{item.title}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
