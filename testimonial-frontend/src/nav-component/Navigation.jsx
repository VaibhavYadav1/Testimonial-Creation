import React from 'react';
import { Link } from 'react-router-dom';
import "./navStyle.css"

function Navigation() {
    return (
        <nav>
            <Link to="/" className="logo">Testimonial</Link>
            <ul>
                <li><Link to="/customers">Customers</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/signin" className="sign-in">Sign in</Link></li>
                <li><Link to="/signup" className="sign-up">Sign up</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
