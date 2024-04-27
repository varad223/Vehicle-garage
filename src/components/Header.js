import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png'
import a from './images/a.jpg'
import b from './images/b.jpeg'
import c from './images/c.png'

const Header = () => {
    return (
        <>

            <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand to="#home">
                        <img src={logo}
                            width="80"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand to="#home">
                        {' '}
                        JANTA GARAGE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"><Navbar.Offcanvas>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                MENU
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <NavDropdown
                                    title="Features"
                                >
                                    <NavDropdown.Item to="#action3"><Nav.Link><Link to="/services">Repairing</Link></Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item to="#action4">
                                        <Nav.Link><Link to="/cart">Parts</Link></Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item to="#action5">
                                        <Nav.Link><Link to="/book">Vehicle Booking</Link></Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                            </Nav>
                            <Form inline>
                                <Row>
                                    <Col xs="auto">
                                        <Link to="/login">
                                            <Button type="submit">Login</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas></Navbar.Collapse>
                </Container>
            </Navbar>

            <Carousel fade>
                <Carousel.Item interval={1500}>
                    <img src={a} alt="Logo" />
                    <Carousel.Caption>
                        <h3>Vehicle Repairing</h3>
                        <p>All repairing in single touch.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={b} alt="Logo" />
                    <Carousel.Caption>
                        <h3>Vehicle Parts Seller</h3>
                        <p>New to old all spare parts are here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={c} alt="Logo" />
                    <Carousel.Caption>
                        <h3>Vehicle Rental</h3>
                        <p>
                            Enjoy every ride of your life.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Header
