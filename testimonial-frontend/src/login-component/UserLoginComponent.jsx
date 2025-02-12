import React from 'react';
import '../bodyStyle.css';
import LoginNavigation from '../nav-component/LoginNavigation';

function UserLoginComponent() {
  const savedUserName = localStorage.getItem("savedUserName");
  
  return (
    <>
      <LoginNavigation name={savedUserName} />
    </>
  );
}

export default UserLoginComponent;
