import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { auth } from "./Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import View from "./View";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      if (validatePassword()) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate(`/app/profile`);
      }
    } catch (err) {
      setError(err.message);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <View title="Register">
      <div className="register">
        <div className="register__container">
          {error && <div className="auth__error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button>Register</button>
          </form>
          <div>
            <Link to="/app/reset">Forgot Password</Link>
          </div>
          <div>
            Already have an account? <Link to="/app/login">Login</Link> now.
          </div>
        </div>
      </div>
    </View>
  );
};

export default Register;
