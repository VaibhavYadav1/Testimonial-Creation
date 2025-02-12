import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const savedUserName = localStorage.getItem("savedUserName");
  let savedUserPassword = localStorage.getItem("savedUserPassword");
  const savedUserToken = localStorage.getItem("savedUserToken");
  const navigate = useNavigate();

  const [userId, setUserId] = useState(0);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/auth/user/findUserByName",
          { username: savedUserName },
          {
            headers: {
              Authorization: `Bearer ${savedUserToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response data:", response.data);

        setUserId(response.data.userId);
        setUserName(response.data.username);
        setEmail(response.data.email);
        setDomain(response.data.domain);
        setPassword(response.data.password);
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/");
      }
    };

    fetchUserData();
  }, [savedUserName, savedUserToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== savedUserPassword) {
      localStorage.setItem("savedUserPassword", password);
      savedUserPassword = localStorage.getItem("savedUserPassword");
    }

    try {
      const response = await axios.put(
        "http://localhost:4000/auth/user/updateUser/" + userId,
        {
          username: username,
          password: savedUserPassword,
          email: email,
          domain: domain,
        },
        {
          headers: {
            Authorization: `Bearer ${savedUserToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Update response data:", response.data);

      localStorage.setItem("savedUserName", username);

      navigate("/userLogin")
    } catch (error) {
      console.error("Error updating user data:", error);
      navigate("/");
    }
  };

  return (
    <div className="body-container">
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Update Details</h2>

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

          <button type="submit" style={styles.updateButton}>
            Update
          </button>
        </form>
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
  updateButton: {
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

export default UpdateUser;
