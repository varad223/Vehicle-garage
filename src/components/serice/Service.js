import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS here
import './Services.css'; // Import your custom CSS for transitions/animations
import Button from 'react-bootstrap/Button';
import service1 from './service-1.jpg';
import service2 from './service-2.jpg';
import service3 from './service-3.jpg';
import service4 from './service-4.jpg';
import E from '../../Page/Home/E/E';
import { Link } from 'react-router-dom';

const Service = () => {
    const [activeTab, setActiveTab] = useState('tab-pane-1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <div className="container-xxl service py-5">
                <div className="container">
                    <div className="text-center fadeInUp">
                        <h6 className="text-primary text-uppercase"></h6>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>
                    <div className="row g-4 fadeInUp">
                        <div className="col-lg-4">
                            <div className="nav w-100 nav-pills me-4">
                                <button className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-1')}>
                                    <i className="fa fa-car-side fa-2x me-3"></i>
                                    <h4 className="m-0">Diagnostic Test</h4>
                                </button>
                                <button className={`nav-link w-101 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-2')}>
                                    <i className="fa fa-car fa-2x me-3"></i>
                                    <h4 className="m-0">Engine Servicing</h4>
                                </button>
                                <button className={`nav-link w-102 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-3')}>
                                    <i className="fa fa-cog fa-2x me-3"></i>
                                    <h4 className="m-0">Tires Replacement</h4>
                                </button>
                                <button className={`nav-link w-103 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-4' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-4')}>
                                    <i className="fa fa-oil-can fa-2x me-3"></i>
                                    <h4 className="m-0">Oil Changing</h4>
                                </button>
                                {/* Add similar buttons for other tabs */}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                {/* Tab Pane 1 */}
                                <CSSTransition in={activeTab === 'tab-pane-1'} timeout={300} classNames="fade" unmountOnExit>
                                    <div className="tab-pane fade show active" id="tab-pane-1">
                                        <div className="row g-4">
                                            <div className="col-md-6" style={{ minHeight: '350px' }}>
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute img-fluid w-100 h-100" src={service1} style={{ objectFit: 'cover' }} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                                <p className="mb-4">a procedure used to identify issues or problems with a vehicle's systems, components, or performance</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Engine Computer (ECU)</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Check Engine Light</p>
                                                <p><i className="fa fa-check text-success me-3"></i>OBD-II (On-Board Diagnostics, standard diagnostic port)</p>
                                                <Link to="/bservices">
                                                    <Button type="submit" className="btn btn-primary px-3">BOOK</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                            <div className="tab-content w-101">
                                {/* Tab Pane 2 */}
                                <CSSTransition in={activeTab === 'tab-pane-2'} timeout={300} classNames="fade" unmountOnExit>
                                    <div className="tab-pane fade show active" id="tab-pane-2">
                                        <div className="row g-4">
                                            <div className="col-md-6" style={{ minHeight: '350px' }}>
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute img-fluid w-100 h-100" src={service2} style={{ objectFit: 'cover' }} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                                <p className="mb-4"> maintenance and inspection tasks focused on keeping the engine running smoothly and efficiently.</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Spark Plugs</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Fuel System Cleaning</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Air Filter</p>
                                                <Link to="/bservices">
                                                    <Button type="submit" className="btn btn-primary px-3">BOOK</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                            <div className="tab-content w-102">
                                {/* Tab Pane 3 */}
                                <CSSTransition in={activeTab === 'tab-pane-3'} timeout={300} classNames="fade" unmountOnExit>
                                    <div className="tab-pane fade show active" id="tab-pane-3">
                                        <div className="row g-4">
                                            <div className="col-md-6" style={{ minHeight: '350px' }}>
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute img-fluid w-100 h-100" src={service3} style={{ objectFit: 'cover' }} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                                <p className="mb-4">Tires need replacement when they are worn out beyond safe limits or damaged</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Wear Bars</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Cracks & Bulges</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Tire Rotation</p>
                                                <Link to="/bservices">
                                                    <Button type="submit" className="btn btn-primary px-3">BOOK</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                            <div className="tab-content w-103">
                                {/* Tab Pane 4 */}
                                <CSSTransition in={activeTab === 'tab-pane-4'} timeout={300} classNames="fade" unmountOnExit>
                                    <div className="tab-pane fade show active" id="tab-pane-4">
                                        <div className="row g-4">
                                            <div className="col-md-6" style={{ minHeight: '350px' }}>
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute img-fluid w-100 h-100" src={service4} style={{ objectFit: 'cover' }} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                                <p className="mb-4">lubricating engine components, reducing friction, cooling, and carrying away contaminants</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Synthetic Oil</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Viscosity</p>
                                                <p><i className="fa fa-check text-success me-3"></i>Service Interval</p>
                                                <Link to="/bservices">
                                                    <Button type="submit" className="btn btn-primary px-3">BOOK</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <E />
        </>
    );
};

export default Service;
