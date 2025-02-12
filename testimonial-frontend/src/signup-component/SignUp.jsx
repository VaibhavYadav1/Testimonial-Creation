import React from 'react';
import { Link } from 'react-router-dom';
import '../bodyStyle.css'
import Navigation from '../nav-component/Navigation';

function SignUp() {
    return (
        <>
            <Navigation />

            <div className='body-container'>
                <div style={styles.card}>
                    <h2 style={styles.heading}>Choose Sign Up Type</h2>
                    <div style={styles.buttonContainer}>
                        <Link to="/userSignUp" style={styles.link}>User Sign Up</Link>
                        <Link to="/customerSignUp" style={styles.link}>Customer Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    card: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '350px',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
        fontWeight: 'bold',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',  // Aligns buttons vertically
        alignItems: 'center',
        gap: '15px', // Adds space between buttons
    },
    link: {
        display: 'block',
        width: '80%',
        padding: '12px 20px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: 'rgb(51 101 155)',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0px 5px 15px rgba(0, 123, 255, 0.3)',
    },
    linkHover: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    }
};

export default SignUp;