import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./loginNavStyle.css";

function LoginNavigation(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      <Link to="/" className="logo">Testimonial</Link>
      <ul>
        <li><Link to="+/updateUser" className="profile">{props.name}</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
}

export default LoginNavigation;
