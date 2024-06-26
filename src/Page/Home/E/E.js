import React, { Component } from 'react';
import './E.css';
import experts6 from '../../../images/experts/expert-6.png';
import experts5 from '../../../images/experts/expert-5.jpg';
import experts4 from '../../../images/experts/expert-4.jpg';
import experts3 from '../../../images/experts/expert-3.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class E extends Component {
   state = {
      teamMembers: [
         { id: 1, imgSrc: experts6, fullName: 'Emily Brown', designation: 'Washing' },
         { id: 2, imgSrc: experts5, fullName: 'Jane Smith', designation: 'Engine Specalist' },
         { id: 3, imgSrc: experts4, fullName: 'Alex Johnson', designation: 'Part dealer' },
         { id: 4, imgSrc: experts3, fullName: 'John Doe', designation: 'Head Driver' }
      ]
   };

   static getDerivedStateFromProps(props, state) {
      // You can update state here based on props if needed
      return null; // No state update necessary in this case
   }

   render() {
      const { teamMembers } = this.state;

      return (
         <div className="container-fluid py-5">
            <div className="container py-5">
               <h1 className="display-1 text-primary text-center"></h1>
               <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
               <OwlCarousel className="owl-carousel team-carousel position-relative" items={3} margin={30}>
                  {teamMembers.map(member => (
                     <div className="team-item" key={member.id}>
                        <img className="img-fluid w-100" src={member.imgSrc} alt={member.fullName} />
                        <div className="position-relative py-4">
                           <h4 className="text-uppercase">{member.fullName}</h4>
                           <p className="m-0">{member.designation}</p>
                           <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                              <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                              <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                              <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                           </div>
                        </div>
                     </div>
                  ))}
               </OwlCarousel>
            </div>
         </div>
      );
   }
}

export default E;
