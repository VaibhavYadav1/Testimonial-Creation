import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateCustomer() {

    const savedCustomerName = localStorage.getItem("savedCustomerName");
    let savedCustomerPassword = localStorage.getItem("savedCustomerPassword");
    const savedCustomerToken = localStorage.getItem("savedCustomerToken");
    const navigate = useNavigate();

    const [customerId, setCustomerId] = useState(0);
    const [customerName, setCustomerName] = useState("");
    const [password, setPassword] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
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

                console.log("Response data:", response.data);

                setCustomerId(response.data.customerId);
                setCustomerName(response.data.customerName);
                setCustomerEmail(response.data.customerEmail);
                setPassword(response.data.password);
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate("/");
            }
        };

        fetchUserData();
    }, [savedCustomerName, savedCustomerPassword, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== savedCustomerPassword) {
            localStorage.setItem("savedCustomerPassword", password);
            savedCustomerPassword = localStorage.getItem("savedCustomerPassword"); 
        }
    
        try {
            console.log("Saved Token:", savedCustomerToken);
    
            const response = await axios.put(
                `http://localhost:4000/auth/customer/updateCustomer/${customerId}`,
                {
                    customerName: customerName,
                    customerEmail: customerEmail,
                    password: savedCustomerPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${savedCustomerToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );
    
            localStorage.setItem("savedCustomerName", customerName);
            navigate("/customerLogin");
        } catch (error) {
            console.error("Error updating user data:", error.response ? error.response.data : error.message);
            navigate("/");
        }
    };
    

    return (
        <div className="body-container">
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Update Details</h2>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="customerName">Customer Name *</label>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
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
    )
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


export default UpdateCustomer