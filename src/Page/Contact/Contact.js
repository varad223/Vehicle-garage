import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
   const navigate = useNavigate();
   const [formError, setFormError] = useState(false);
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subj: '',
      message: '',
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         let r = await fetch("http://localhost:4000/contact/contact", {
            method: 'POST',
            /*headers: {
               'Content-type': 'text/plain',
            },*/
            body: JSON.stringify(formData),
         });

         if (r.ok) {
            alert('Message sent successfully!');
            navigate('/contact');
         } else {
            setFormError(true);
         }
      } catch (error) {
         console.error('Error sending message:', error.message);
         setFormError(true);
      }
   };

   return (
      <>
         <div id="contact">
            <section className="contact-area">
               <h1 className="text-center p-4 heading">Contact Us</h1>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-7 col-lg-8">
                        <div className="section-title mt-45">
                           <h3 className="title">Get in touch</h3>
                        </div>
                        <div className="contact-form form-style-four mt-15">
                           <form onSubmit={handleSubmit}>
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="form-input mt-15">
                                       <label>Full Name</label>
                                       <div className="input-items default">
                                          <i className="lni lni-user"></i>
                                          <input type="text" name="name" placeholder="Full Name" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="form-input mt-15">
                                       <label>Email Address</label>
                                       <div className="input-items default">
                                          <i className="lni lni-envelope"></i>
                                          <input type="text" name="email" placeholder="Email Address" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="form-input mt-15">
                                       <label>Phone Number</label>
                                       <div className="input-items default">
                                          <i className="lni lni-envelope"></i>
                                          <input type="tel" name="phone" placeholder="Phone Number" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="form-input mt-15">
                                       <label>Subject</label>
                                       <div className="input-items default">
                                          <i className="lni lni-envelope"></i>
                                          <input type="text" name="subj" placeholder="Type here" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="form-input mt-15">
                                       <label>Your Message</label>
                                       <div className="input-items default">
                                          <i className="lni lni-envelope"></i>
                                          <textarea
                                             name="message"
                                             value={formData.message}
                                             onChange={handleChange}
                                             placeholder="Type your message here"
                                          ></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 {/* Add more input fields as needed */}
                              </div>
                              <div className="col-md-12">
                                 <div className="single-form mt-15">
                                    <div className="input-form rounded-buttons">
                                       <button className="btn primary-btn rounded-full" type="submit">
                                          SEND MESSAGE
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                           {formError && <div className="error">Error sending message. Please try again.</div>}
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                        <div className="section-title mt-5">
                           <h3 className="title">Contact Information</h3>
                        </div>
                        <div className="contact-info">
                           <ul className="info">
                              <li>
                                 <div className="single-info">
                                    <div className="info-icon">
                                       <i className="lni lni-map-marker"></i>
                                    </div>
                                    <div className="info-content">
                                       <p className="text">Madison Street, NewYork, USA</p>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="single-info">
                                    <div className="info-icon">
                                       <i className="lni lni-phone"></i>
                                    </div>
                                    <div className="info-content">
                                       <p className="text">+61 (8) 8234 3555</p>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="single-info">
                                    <div className="info-icon">
                                       <i className="lni lni-phone"></i>
                                    </div>
                                    <div className="info-content">
                                       <p className="text">+61 (8) 8234 3555</p>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="single-info">
                                    <div className="info-icon">
                                       <i className="lni lni-phone"></i>
                                    </div>
                                    <div className="info-content">
                                       <p class="text">support@thecardoctor.com</p>
                                    </div>
                                 </div>
                              </li>
                              {/* Add more contact information as needed */}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};

export default Contact;
