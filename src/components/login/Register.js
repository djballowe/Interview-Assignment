import React, { useState } from "react";
import { auth, createWithEmail } from "../firebase auth/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user] = useAuthState(auth);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    switch (id) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm-password":
        setConfirmPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert("Passwords Must Match");
    } else {
      createWithEmail(email, password);
    }
  };

  return (
    <div className="login-container">
      <div className="login-text">
        <h2>Register</h2>
        <p>Please enter your information:</p>
      </div>
      <div className="contact-inputs">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            id="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            id="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm-password"
            onChange={handleChange}
            required
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="divider">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div className="new-customer">
        <p>Already have an account?</p>
        <p
          onClick={() => {
            navigate("/login");
          }}
        >
          Create an Account
        </p>
      </div>
    </div>
  );
}
