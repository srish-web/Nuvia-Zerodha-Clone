import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ username: "", password: "" });
  const { username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        { ...inputValue },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-right" });
        setTimeout(() => {
          window.location.href = "http://localhost:3001"; // redirect to dashboard app
        }, 1000);
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (err) {
      console.error(err);
    }
    setInputValue({ username: "", password: "" });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: "200px", marginBottom: "100px"}}>
        <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
            <h2 className="text-center mb-4 fw-bold text-primary">Login</h2>
            
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input 
                type="text" 
                className="form-control" 
                name="username" 
                value={username} 
                placeholder="Johndoe" 
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
                Login
            </button>

            <div className="text-center mt-3">
                <span className="text-muted small">
                Don't have an account? <Link to="/signup" className="text-decoration-none fw-semibold">Signup</Link>
                </span>
            </div>
            </form>
        </div>
        <ToastContainer />
        </div>

  );
};

export default Login;