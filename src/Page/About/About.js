import React from "react";
import "./About.css";
import E from "../Home/E/E";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "./about.jpg";

const About = () => {
  return (
    <>
      <div>
        {/* Page Header */}
        {/*<div
          className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: `url(${carouselbg1})` }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#"></a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>*/}

        {/* Service Section */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                <div className="d-flex py-5 px-4">
                  <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                  <div className="ps-4">
                    <h5 className="mb-3">Quality Servicing</h5>
                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                    <a className="text-secondary border-bottom" href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="d-flex bg-light py-5 px-4">
                  <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                  <div className="ps-4">
                    <h5 className="mb-3">Expert Workers</h5>
                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                    <a className="text-secondary border-bottom" href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                <div className="d-flex py-5 px-4">
                  <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                  <div className="ps-4">
                    <h5 className="mb-3">Modern Equipment</h5>
                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                    <a className="text-secondary border-bottom" href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
              <img className="position-absolute img-fluid w-100 h-100" src={about} style={{ objectFit: 'cover' }} alt="" />
              <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, .08)' }}>
                <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                <h4 className="text-white">Experience</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className="text-primary text-uppercase">// About Us //</h6>
            <h1 className="mb-4"><span className="text-primary">Janta Garage</span> Is The Best Place For Your Auto Care</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="row g-4 mb-3 pb-3">
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                <div className="d-flex">
                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                    <span className="fw-bold text-secondary">01</span>
                  </div>
                  <div className="ps-3">
                    <h6>Professional &amp; Expert</h6>
                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                <div className="d-flex">
                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                    <span className="fw-bold text-secondary">02</span>
                  </div>
                  <div className="ps-3">
                    <h6>Quality Servicing Center</h6>
                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                <div className="d-flex">
                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                    <span className="fw-bold text-secondary">03</span>
                  </div>
                  <div className="ps-3">
                    <h6>Awards Winning Workers</h6>
                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for other services */}
            </div>
            <a href="" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
          </div>
        </div>
      </div>
    </div>
        <E></E>
      </div>
    </>
  );
};

export default About;