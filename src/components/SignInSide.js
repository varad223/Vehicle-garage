import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Link } from 'react-router-dom';

const SignInSide = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  // Creating a bool var to check if server response is ok or not
  const [formresponse, setFormResponse] = useState(true);

  const onSubmit = async (data) => {
    try {
      let r = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await r.text();

      if (r.status === 200) {
        sessionStorage.setItem("authToken", res);
        alert("Sign Up Success");
        navigate('/');
      } else {
        setFormResponse(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="signUp">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input"
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: { value: 8, message: "Min Length is 8" },
                maxLength: { value: 15, message: "Max Length is 15" },
              })}
              className="input"
            />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <div className="field">
            {!formresponse && (
              <div className="error">Email is already registered with us</div>
            )}
          </div>
          <div className="field">
            <input
              disabled={isSubmitting}
              className="button"
              value={isSubmitting ? "Submitting..." : "Submit"}
              type="submit"
            />
          </div>
          <div className="links-container">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
            <Link to="/register" className="sign-up-link">
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInSide;
