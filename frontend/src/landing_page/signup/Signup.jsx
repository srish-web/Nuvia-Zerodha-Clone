// import React from 'react';
// function Signup() {
//     return ( 
//         <h1>Signup</h1>
//      );
// }

// export default Signup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "", username: "" });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BURL}/signup`,
        { ...inputValue },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-right" });
        setTimeout(() => {
          window.location.href = `${process.env.REACT_APP_DURL}?token=${data.token}`;
        }, 1000);
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Signup failed", { position: "bottom-left" });
    }
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <>
    
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: "150px", marginBottom:"200px", flexDirection: "column"}}>
        <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
            <h2 className="text-center mb-4 fw-bold text-primary">Signup</h2>
            
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                name="email" 
                value={email} 
                placeholder="name@example.com" 
                onChange={handleOnChange} 
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Username</label>
                <input 
                type="text" 
                className="form-control" 
                name="username" 
                value={username} 
                placeholder="johndoe" 
                onChange={handleOnChange} 
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                name="password" 
                value={password} 
                placeholder="••••••••" 
                onChange={handleOnChange} 
                required
                />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2 py-2 fw-semibold">
                Sign Up
            </button>
            </form>
            <p className="text-center">Already have an account? <Link  to="/login">Login</Link></p>
        </div>
        <div className="card mt-3 shadow-sm">
        <div className="card-body text-center">
          <h5 className="fw-bold text-success">Login directly using: </h5>
          <p>Email: mssrishtygupta1110@gmail.com <br />
             Username: SrishtyGupta <br />
             Password: SrishtyGupta</p>
        </div>
      </div>
        <ToastContainer />
        </div>
    </>
  );
};

export default Signup;