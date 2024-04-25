import React from "react";
import "./Clients.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Clients = () => {
  return (
    <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <h1 className="display-1 text-primary text-center"></h1>
      <h1 className="display-4 text-uppercase text-center mb-5">Our Services</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-2">
          <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: '80px', height: '80px' }}>
                <i className="fa fa-2x fa-taxi text-secondary"></i>
              </div>
              <h1 className="display-2 text-white mt-n2 m-0">01</h1>
            </div>
            <h4 className="text-uppercase mb-3">Car Rental</h4>
            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-2">
          <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: '80px', height: '80px' }}>
                <i className="fa fa-2x fa-taxi text-secondary"></i>
              </div>
              <h1 className="display-2 text-white mt-n2 m-0">02</h1>
            </div>
            <h4 className="text-uppercase mb-3">CAR FINANCING</h4>
            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-2">
          <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: '80px', height: '80px' }}>
                <i className="fa fa-2x fa-taxi text-secondary"></i>
              </div>
              <h1 className="display-2 text-white mt-n2 m-0">03</h1>
            </div>
            <h4 className="text-uppercase mb-3">CAR INSPECTION</h4>
            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-2">
          <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: '80px', height: '80px' }}>
                <i className="fa fa-2x fa-taxi text-secondary"></i>
              </div>
              <h1 className="display-2 text-white mt-n2 m-0">04</h1>
            </div>
            <h4 className="text-uppercase mb-3">AUTO REPAIRING</h4>
            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-2">
          <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: '80px', height: '80px' }}>
                <i className="fa fa-2x fa-taxi text-secondary"></i>
              </div>
              <h1 className="display-2 text-white mt-n2 m-0">05</h1>
            </div>
            <h4 className="text-uppercase mb-3">AUTO PAINTING</h4>
            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-2">
          <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: '80px', height: '80px' }}>
                <i className="fa fa-2x fa-taxi text-secondary"></i>
              </div>
              <h1 className="display-2 text-white mt-n2 m-0">06</h1>
            </div>
            <h4 className="text-uppercase mb-3">AUTO CLEANING</h4>
            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
          </div>
        </div>
        {/* Repeat the above structure for other services */}
      </div>
    </div>
  </div>
  );
};

export default Clients;
