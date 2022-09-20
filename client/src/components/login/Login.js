import React, { useState, useEffect } from "react";
import { signInWithEmail } from "../firebase auth/config";
import { auth } from "../firebase auth/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="login-container">
      <div className="login-text">
        <h2>Login</h2>
        <p>Please enter your email and password:</p>
      </div>
      <div className="contact-inputs">
        <form action="" onSubmit={handleSubmit}>
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
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="divider">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div className="new-customer">
        <p>New Customer?</p>
        <p
          onClick={() => {
            navigate("/register");
          }}
        >
          Create an Account
        </p>
      </div>
    </div>
  );
}
