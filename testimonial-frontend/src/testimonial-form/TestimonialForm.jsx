import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TestimonialForm() {
  // Testimonial fields
  const [rating, setRating] = useState(1);
  const [customerAbout, setCustomerAbout] = useState("");
  const [description, setDescription] = useState("");

  // Dropdown for users
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(""); // will store username

  const navigate = useNavigate();
  const savedCustomerToken = localStorage.getItem("savedCustomerToken");
  const savedCustomerName = localStorage.getItem("savedCustomerName");

  // Fetch all users for the dropdown
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/auth/user/getAllUsers",
          {
            headers: {
              Authorization: `Bearer ${savedCustomerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Users:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [savedCustomerToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUser) {
      alert("Please select a user from the dropdown");
      return;
    }

    // Asynchronous function to get user ID from username
    const getUserId = async () => {
      if (!selectedUser || !savedCustomerToken) {
        console.error("Missing user details or token.");
        return null;
      }
      try {
        const response = await axios.post(
          "http://localhost:4000/auth/user/findUserByName",
          { username: selectedUser },
          {
            headers: {
              Authorization: `Bearer ${savedCustomerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("User ID:", response.data.userId);
        return response.data.userId;
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/");
        return null;
      }
    };

    // Asynchronous function to get customer ID from saved customer name
    const getCustomerId = async () => {
      if (!savedCustomerName || !savedCustomerToken) {
        console.error("Missing customer name or token.");
        return null;
      }
      try {
        const response = await axios.post(
          "http://localhost:4000/auth/customer/findCustomerByName",
          { customerName: savedCustomerName },
          {
            headers: {
              Authorization: `Bearer ${savedCustomerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Customer ID:", response.data.customerId);
        return response.data.customerId;
      } catch (error) {
        console.error("Error fetching customer data:", error);
        navigate("/");
        return null;
      }
    };

    // Await the asynchronous calls
    const userId = await getUserId();
    const customerId = await getCustomerId();
    const createdAt = new Date().toISOString();

    const testimonialData = {
      rating: rating,
      userId: userId,
      customerId: customerId,
      description: description,
      customerAbout: customerAbout,
      isVisible: true,
      createdAt: createdAt,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/testimonials/create",
        testimonialData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Testimonial created:", response.data);
      navigate("/customerLogin");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div style={styles.bodycontainer}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add Your Testimonial</h2>
        <form onSubmit={handleSubmit} style={styles.form} method="post">
          {/* Rating Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="rating" style={styles.label}>
              Rating* (1-10)
            </label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
              min="1"
              max="10"
              style={styles.input}
            />
          </div>
          {/* Customer About Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="customerAbout" style={styles.label}>
              Customer About*
            </label>
            <input
              type="text"
              id="customerAbout"
              value={customerAbout}
              onChange={(e) => setCustomerAbout(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {/* Description Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="description" style={styles.label}>
              Description*
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ ...styles.input, ...styles.textarea }}
            />
          </div>
          {/* Dropdown for Selecting a User */}
          <div style={styles.inputGroup}>
            <label htmlFor="selectedUser" style={styles.label}>
              Select User*
            </label>
            <select
              id="selectedUser"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">--Select a user--</option>
              {users.map((user) => (
                // Use username as value since our API expects a username for finding user ID
                <option key={user.userId} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  bodycontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to right, rgb(112, 186, 250), rgb(184, 241, 244))",
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  textarea: {
    minHeight: "100px",
    resize: "vertical",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default TestimonialForm;
