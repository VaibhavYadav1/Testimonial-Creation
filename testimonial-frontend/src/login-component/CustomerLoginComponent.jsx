import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginNavigation from "../nav-component/LoginNavigation";

const CustomerLoginComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();
  const savedCustomerName = localStorage.getItem("savedCustomerName");
  const savedCustomerToken = localStorage.getItem("savedCustomerToken");

  useEffect(() => {
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
        console.error("Error fetching user data:", error);
        navigate("/");
        return null;
      }
    };

    const fetchTestimonials = async () => {
      const customerId = await getCustomerId();
      if (!customerId) return;

      try {
        const response = await axios.get(
          `http://localhost:4000/testimonials/getAllByCustomerId/${customerId}`,
          {
            headers: {
              Authorization: `Bearer ${savedCustomerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, [savedCustomerName, savedCustomerToken, navigate]);

  const styles = {
    bodyContainer: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    add: {
      position: "absolute",
      top: "100px",
      right: "30px",
      backgroundColor: "#28a745",
      color: "white",
      padding: "10px 15px",
      fontSize: "16px",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      textAlign: "center",
    },
    testimonialContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginTop: "20px",
      width: "100%",
      maxWidth: "800px",
    },
    testimonialCard: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    testimonialImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "15px",
    },
    testimonialContent: {
      flexGrow: 1,
    },
    testimonialText: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "8px",
    },
    testimonialInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "#777",
    },
    testimonialAbout: {
      fontWeight: "bold",
      marginRight: "10px",
    },
    testimonialRating: {
      color: "gold",
      fontSize: "14px",
    },
    testimonialDate: {
      fontSize: "12px",
    },
  };

  return (
    <>
      <LoginNavigation name={savedCustomerName} />
      <main style={styles.bodyContainer}>
        <Link to="/addTestimonial" style={styles.add}>
          Add Testimonial
        </Link>
        <div style={styles.testimonialContainer}>
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div key={index} style={styles.testimonialCard}>
                <img
                  src={`https://ui-avatars.com/api/?name=${testimonial.customerName}`}
                  alt={testimonial.customerName}
                  style={styles.testimonialImage}
                />
                <div style={styles.testimonialContent}>
                  <p style={styles.testimonialText}>
                    {testimonial.description}
                  </p>
                  <div style={styles.testimonialInfo}>
                    <h4>{testimonial.customerName}</h4>
                    <span style={styles.testimonialAbout}>
                      {testimonial.customerAbout}
                    </span>
                    <div style={styles.testimonialRating}>
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                    <span style={styles.testimonialDate}>
                      {new Date(testimonial.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No testimonials found.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default CustomerLoginComponent;
