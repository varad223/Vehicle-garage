/* eslint-disable no-undef */ // Disable ESLint warnings for undefined '$'

import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel'; // Import Owl Carousel JS
// Import custom CSS
import './CarList.css';
import DirectionsCarFilledSharpIcon from '@mui/icons-material/DirectionsCarFilledSharp';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import Button from 'react-bootstrap/Button';
import { FaRoad } from 'react-icons/fa';
import carrent1 from './car-rent-1.png';
import carrent2 from './car-rent-2.png';
import carrent3 from './car-rent-3.png';
import carrent4 from './car-rent-4.png';
import carrent5 from './car-rent-5.png';
import carrent6 from './car-rent-6.png';
import { Link } from 'react-router-dom';

const CarList = () => {
    useEffect(() => {
        // Team carousel initialization
        $(".team-carousel, .related-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 30,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Testimonials carousel initialization
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            margin: 30,
            dots: true,
            loop: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Vendor carousel initialization
        $('.vendor-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }, []); // Empty dependency array to run once after component mount

    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
                <div className="row">
                    {/* Car items */}
                    {/* Car Item 1 */}
                    <div className="col-lg-4 col-md-6 mb-2">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={carrent1} alt="" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <i class="fa fa-car text-primary mr-1"><DirectionsCarFilledSharpIcon fontSize="large" color="success" /></i>
                                    <span>2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <SettingsSuggestSharpIcon fontSize="large" color="success" />
                                    <span>AUTO</span>
                                </div>
                                <div className="px-2">
                                    <div
                                        style={{
                                            backgroundColor: '#fcfcfc',
                                        }}
                                    >
                                        <FaRoad
                                            style={{
                                                color: 'green',
                                                fontSize: '2em', // Adjust value for desired size
                                            }}
                                        />
                                    </div>
                                    <span>250K</span>
                                </div>
                            </div>
                            <Link to="/vbook">
                                <Button type="submit" className="btn btn-primary px-3">$99.00/Day</Button>
                            </Link>
                            {/*<Link to="/vbook" className="btn btn-primary px-3">$99.00/Day</Link>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={carrent2} alt="" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <i class="fa fa-car text-primary mr-1"><DirectionsCarFilledSharpIcon fontSize="large" color="success" /></i>
                                    <span>2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <SettingsSuggestSharpIcon fontSize="large" color="success" />
                                    <span>AUTO</span>
                                </div>
                                <div className="px-2">
                                    <div
                                        style={{
                                            backgroundColor: '#fcfcfc',
                                        }}
                                    >
                                        <FaRoad
                                            style={{
                                                color: 'green',
                                                fontSize: '2em', // Adjust value for desired size
                                            }}
                                        />
                                    </div>
                                    <span>25K</span>
                                </div>
                            </div>
                            <Link to="/vbook">
                                <Button type="submit" className="btn btn-primary px-3">$99.00/Day</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={carrent3} alt="" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <i class="fa fa-car text-primary mr-1"><DirectionsCarFilledSharpIcon fontSize="large" color="success" /></i>
                                    <span>2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <SettingsSuggestSharpIcon fontSize="large" color="success" />
                                    <span>AUTO</span>
                                </div>
                                <div className="px-2">
                                    <div
                                        style={{
                                            backgroundColor: '#fcfcfc',
                                        }}
                                    >
                                        <FaRoad
                                            style={{
                                                color: 'green',
                                                fontSize: '2em', // Adjust value for desired size
                                            }}
                                        />
                                    </div>
                                    <span>25K</span>
                                </div>
                            </div>
                            <Link to="/vbook">
                                <Button type="submit" className="btn btn-primary px-3">$99.00/Day</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={carrent4} alt="" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <i class="fa fa-car text-primary mr-1"><DirectionsCarFilledSharpIcon fontSize="large" color="success" /></i>
                                    <span>2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <SettingsSuggestSharpIcon fontSize="large" color="success" />
                                    <span>AUTO</span>
                                </div>
                                <div className="px-2">
                                    <div
                                        style={{
                                            backgroundColor: '#fcfcfc',
                                        }}
                                    >
                                        <FaRoad
                                            style={{
                                                color: 'green',
                                                fontSize: '2em', // Adjust value for desired size
                                            }}
                                        />
                                    </div>
                                    <span>25K</span>
                                </div>
                            </div>
                            <Link to="/vbook">
                                <Button type="submit" className="btn btn-primary px-3">$99.00/Day</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={carrent5} alt="" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <i class="fa fa-car text-primary mr-1"><DirectionsCarFilledSharpIcon fontSize="large" color="success" /></i>
                                    <span>2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <SettingsSuggestSharpIcon fontSize="large" color="success" />
                                    <span>AUTO</span>
                                </div>
                                <div className="px-2">
                                    <div
                                        style={{
                                            backgroundColor: '#fcfcfc',
                                        }}
                                    >
                                        <FaRoad
                                            style={{
                                                color: 'green',
                                                fontSize: '2em', // Adjust value for desired size
                                            }}
                                        />
                                    </div>
                                    <span>25K</span>
                                </div>
                            </div>
                            <Link to="/vbook">
                                <Button type="submit" className="btn btn-primary px-3">$99.00/Day</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={carrent6} alt="" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <i class="fa fa-car text-primary mr-1"><DirectionsCarFilledSharpIcon fontSize="large" color="success" /></i>
                                    <span>2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <SettingsSuggestSharpIcon fontSize="large" color="success" />
                                    <span>AUTO</span>
                                </div>
                                <div className="px-2">
                                    <div
                                        style={{
                                            backgroundColor: '#fcfcfc',
                                        }}
                                    >
                                        <FaRoad
                                            style={{
                                                color: 'green',
                                                fontSize: '2em', // Adjust value for desired size
                                            }}
                                        />
                                    </div>
                                    <span>25K</span>
                                </div>
                            </div>
                            <Link to="/vbook">
                                <Button type="submit" className="btn btn-primary px-3">$99.00/Day</Button>
                            </Link>
                        </div>
                    </div>
                    {/* Repeat the above structure for other car items */}
                </div>
            </div>
        </div>
    );
};

export default CarList;
