import React from "react";
import "./Video.css";
import testimonial1 from './testimonial-1.jpg';
import testimonial2 from './testimonial-2.jpg';
import testimonial3 from './testimonial-3.jpg';
import testimonial4 from './testimonial-4.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const testimonials = [
  { id: 1, imgSrc: testimonial1, name: 'Client Name', profession: 'Profession', text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
  { id: 2, imgSrc: testimonial2, name: 'Client Name', profession: 'Profession', text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
  { id: 3, imgSrc: testimonial3, name: 'Client Name', profession: 'Profession', text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
  { id: 4, imgSrc: testimonial4, name: 'Client Name', profession: 'Profession', text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.' },];
const Video = () => {
  
      return (
    <><div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="text-primary text-uppercase"></h6>
          <h1 className="mb-5">Our Clients Say!</h1>
        </div>
        <OwlCarousel className="owl-carousel testimonial-carousel position-relative" items={3} margin={30}>
          {testimonials.map(testimonial => (
            <div className="testimonial-item text-center" key={testimonial.id}>
              <img className="bg-light rounded-circle p-2 mx-auto mb-3" src={testimonial.imgSrc} style={{ width: '80px', height: '80px' }} alt="Client" />
              <h5 className="mb-0">{testimonial.name}</h5>
              <p>{testimonial.profession}</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div></>



  );

};

export default Video;
