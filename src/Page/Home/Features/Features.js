import React from "react";
import "./Features.css";
import about from './about.png'
import logo from './logo.png'
import { MdCarRental } from "react-icons/md";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { RiCustomerService2Line } from "react-icons/ri";
const Features = () => {
  return (
    <>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          
          <h1 className="display-4 text-uppercase text-center mb-5">Welcome To
            <span className="text-primary"> Janta Garage</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img className="w-75 mb-4" src={about} alt="" />
              <p>Justo et eos et ut takimata sed sadipscing dolore
                lorem, et elitr labore labore voluptua no rebum sed,
                stet voluptua amet sed elitr ea dolor dolores no
                clita. Dolores diam magna clita ea eos amet, amet
                rebum voluptua vero vero sed clita accusam takimata.
                Nonumy labore ipsum sea voluptua sea eos sit justo,
                no ipsum sanctus sanctus no et no ipsum amet, tempor
                labore est labore no. Eos diam eirmod lorem ut
                eirmod, ipsum diam sadipscing stet dolores elitr
                elitr eirmod dolore. Magna elitr accusam takimata
                labore, et at erat eirmod consetetur tempor eirmod
                invidunt est, ipsum nonumy at et.</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 mb-2">
              <div className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: '150px' }}>
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: '100px', height: '100px' }}>
                  <SupportAgentIcon />
                </div>
                <h4 className="text-uppercase m-0">24/7 Car Rental
                  Support</h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: '150px' }}>
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: '100px', height: '100px' }}>
                  <CarRentalIcon fontSize="large"/>
                </div>
                <h4 className="text-uppercase m-0">CAR RESERVATION ANYTIME</h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: '150px' }}>
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: '100px', height: '100px' }}>
                  
                </div>
                <h4 className="text-uppercase m-0">LOTS OF PICKUP LOCATIONS</h4>
              </div>
            </div>
            {/* Other columns */}
          </div>
        </div>
      </div></>
  );
};

export default Features;
