import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../bodyStyle.css';

function AuthenticateCustomer() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const savedCustomerName = localStorage.getItem("savedCustomerName");
  const savedPassword = localStorage.getItem("savedCustomerPassword");

  useEffect(() => {
    const getToken = async () => {
      if (!savedCustomerName || !savedPassword) {
        navigate("/");
        return;
      }

      try {
        const response = await axios.post("http://localhost:4000/auth/customer/token", {
          customerName: savedCustomerName,
          password: savedPassword
        });

        if (response.data) {
          setToken(response.data);
          localStorage.setItem("savedCustomerToken", response.data);
          navigate("/customerLogin");
        }
      } catch (error) {
        console.error("Error fetching token:", error);
        navigate("/");
      }
    };

    getToken();
  }, [navigate, savedCustomerName, savedPassword]);

  return (
    <>Authenticating {savedCustomerName}...</>
  );
}

export default AuthenticateCustomer;
