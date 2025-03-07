import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../bodyStyle.css';

function Authenticate() {
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const savedUserName = localStorage.getItem("savedUserName");
    const savedPassword = localStorage.getItem("savedUserPassword");

    
    useEffect(() => {
        const getToken = async () => {
            
            if (savedUserName == null || savedPassword == null) {
                alert("invalid details");
                navigate("/");
            }
            try {
                const response = await axios.post("http://localhost:4000/auth/user/token", {
                    username: savedUserName,
                    password: savedPassword
                });
                setToken(response.data);
                console.log(token);
            } catch (error) {
                alert("invalid details");
                console.error("Error fetching token:", error);
                navigate("/");
            }
        };

        getToken();
    }, []);

    if (token !== null) {
        localStorage.setItem("savedUserToken", token)
        navigate("/userLogin");
    }
    
    return (
        <>Authenticate ${token}....</>
    )
}

export default Authenticate