import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./vbook.css";

const Vbook = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    // State variable to store server response status
    const [formResponse, setFormResponse] = useState(true);

    const onSubmit = async (data) => {
        try {
            // Your form submission logic here
        } catch (error) {
            console.error("Error submitting form:", error.message);
        }
    };

    return (
        <div className="checkout">
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formContent">
                        <div className="formSection">
                            <h2>Personal Details</h2>
                            <div className="field">
                                <label htmlFor="firstName" className="label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    {...register("firstName", { required: "First Name is required" })}
                                    className="input"
                                />
                                {errors.firstName && (
                                    <div className="error">{errors.firstName.message}</div>
                                )}
                            </div>
                            <div className="field">
                                <label htmlFor="lastName" className="label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    {...register("lastName", { required: "Last Name is required" })}
                                    className="input"
                                />
                                {errors.lastName && (
                                    <div className="error">{errors.lastName.message}</div>
                                )}
                            </div>
                            <div className="field">
                                <label htmlFor="email" className="label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="input"
                                />
                                {errors.email && <div className="error">{errors.email.message}</div>}
                            </div>
                            <div className="field">
                                <label htmlFor="mobileNumber" className="label">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    {...register("mobileNumber", { required: "Mobile Number is required" })}
                                    className="input"
                                />
                                {errors.mobileNumber && (
                                    <div className="error">{errors.mobileNumber.message}</div>
                                )}
                            </div>
                            {/* Personal Details Form Fields */}
                        </div>
                        <div className="formSection">
                            <h2>Booking Details</h2>
                            <div className="field">
                                <label htmlFor="pickupLocation" className="label">
                                    Pickup Location
                                </label>
                                <select {...register("pickupLocation", { required: "Pickup Location is required" })} className="custom-select">
                                    <option value="">Select Location</option>
                                    <option value="location1">Location 1</option>
                                    <option value="location2">Location 2</option>
                                    <option value="location3">Location 3</option>
                                </select>
                                {errors.pickupLocation && (
                                    <div className="error">{errors.pickupLocation.message}</div>
                                )}
                            </div>
                            <div className="field">
                                <label htmlFor="dropLocation" className="label">
                                    Drop Location
                                </label>
                                <select {...register("dropLocation", { required: "Drop Location is required" })} className="custom-select">
                                    <option value="">Select Location</option>
                                    <option value="location1">Location 1</option>
                                    <option value="location2">Location 2</option>
                                    <option value="location3">Location 3</option>
                                </select>
                                {errors.dropLocation && (
                                    <div className="error">{errors.dropLocation.message}</div>
                                )}
                            </div>
                            <div className="field">
                                <label htmlFor="pickupDate" className="label">
                                    Pickup Date
                                </label>
                                <div className="date" id="date2" data-target-input="nearest">
                                    <input
                                        type="date"
                                        {...register("pickupDate", { required: "Pickup Date is required" })}
                                        className="input"
                                    />
                                </div>
                                {errors.pickupDate && (
                                    <div className="error">{errors.pickupDate.message}</div>
                                )}
                            </div>
                            <div className="field">
                                <label htmlFor="pickupTime" className="label">
                                    Pickup Time
                                </label>
                                <div className="time" id="time2" data-target-input="nearest">
                                    <input
                                        type="time"
                                        {...register("pickupTime", { required: "Pickup Time is required" })}
                                        className="input"
                                    />
                                </div>
                                {errors.pickupTime && (
                                    <div className="error">{errors.pickupTime.message}</div>
                                )}
                            </div>
                            <div className="field">
                                <label htmlFor="adults" className="label">
                                    Select Adults
                                </label>
                                <select {...register("adults", { required: "Select Adults is required" })} className="custom-select">
                                    <option value="">Select Adults</option>
                                    <option value="1">1 Adult</option>
                                    <option value="2">2 Adults</option>
                                    <option value="3">3 Adults</option>
                                </select>
                                {errors.adults && <div className="error">{errors.adults.message}</div>}
                            </div>
                            <div className="field">
                                <label htmlFor="children" className="label">
                                    Select Children
                                </label>
                                <select {...register("children", { required: "Select Children is required" })} className="custom-select">
                                    <option value="">Select Children</option>
                                    <option value="0">0 Children</option>
                                    <option value="1">1 Child</option>
                                    <option value="2">2 Children</option>
                                    <option value="3">3 Children</option>
                                </select>
                                {errors.children && <div className="error">{errors.children.message}</div>}
                            </div>
                            <div className="field">
                                <label htmlFor="specialRequest" className="label">
                                    Special Request
                                </label>
                                <textarea
                                    {...register("specialRequest")}
                                    className="form-control py-3 px-4"
                                    rows="3"
                                    placeholder="Special Request"
                                />
                            </div>
                            {/* Booking Details Form Fields */}
                        </div>
                    </div>
                    <div className="field">
                        {!formResponse && (
                            <div className="error">An error occurred during booking. Please try again.</div>
                        )}
                    </div>
                    <div className="field">
                        <button
                            disabled={isSubmitting}
                            className={`primary-btn ${isSubmitting ? 'deactive' : ''}`} // Apply the appropriate button classes
                            type="submit"
                        >
                            {isSubmitting ? "Booking..." : "Book Now"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Vbook;
