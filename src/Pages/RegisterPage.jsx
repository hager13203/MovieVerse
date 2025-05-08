import React, { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/login");
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div
          className="card text-white bg-dark shadow-lg"
          style={{ width: "25rem" }}
        >
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Create Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="submit" className="btn btn-primary mx-auto w-50">
                  Register
                </button>
            
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
