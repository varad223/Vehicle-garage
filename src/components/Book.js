import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Book.css';
const Book = () => {
    const navigate = useNavigate();

    const [formResponse, setFormResponse] = useState(true);

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            service: formData.get('service'),
            specialRequest: formData.get('special_request')
        };

        try {
            let response = await fetch("http://localhost:4000/books/service", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                let res = await response.json();
                sessionStorage.setItem('authToken', res.token);
                alert('Booking Success');
                navigate('/services');
            } else {
                setFormResponse(false);
            }
        } catch (error) {
            console.error("Error submitting form:", error.message);
        }
    };

    return (
        <>
            <div className="checkout">
                <div className="form-container">
                    <h1>Book For A Service</h1>
                    <form onSubmit={onSubmit}>
                        <label className="form-label">Your Name</label>
                        <input className="form-input" type="text" name="name" placeholder="Enter your name" />

                        <label className="form-label">Your Email</label>
                        <input className="form-input" type="email" name="email" placeholder="Enter your email" />

                        <label className="form-label">Select A Service</label>
                        <select className="form-select" name="service">
                            <option value="">Select a service</option>
                            <option value="service1">Diagnostic Test</option>
                            <option value="service2">Engine Servicing</option>
                            <option value="service3">Tires Replacement</option>
                            <option value="service3">Oil Changing</option>
                        </select>

                        <label className="form-label">State The Problem In Brief</label>
                        <textarea className="form-textarea" name="special_request" placeholder="Enter your special request"></textarea>

                        <button className="form-button" type="submit">BOOK NOW</button>
                    </form>
                    {!formResponse && (
                        <div className="error">An error occurred during booking. Please try again.</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Book
