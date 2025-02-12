import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../bodyStyle.css";
import axios from "axios";

function UserSignUpForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      email,
      domain,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/user/register",
        userData
      );

      localStorage.setItem("savedUserName", username);
      localStorage.setItem("savedUserPassword", password);
      console.log(localStorage.getItem("savedUserName"));
      console.log(localStorage.getItem("savedPassword"));
      navigate("/authenticateUser");

    } catch (error) {
      console.error("There was an error!", error);
      navigate("/");
    }
  };


  return (
    <div className="body-container">
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="userName">User Name *</label>
            <input
              type="text"
              id="userName"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="domain">Domain Name *</label>
            <input
              type="text"
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.signupButton}>
            Sign Up
          </button>
        </form>

        <div style={styles.signInText}>
          Already have an account?{" "}
          <Link to="/userSignIn" style={styles.link}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  formContainer: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  signupButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  signInText: {
    marginTop: "10px",
    fontSize: "14px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default UserSignUpForm;
