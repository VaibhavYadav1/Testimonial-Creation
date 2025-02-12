import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home-component/HomePage";
import SignIn from "./signIn-component/SignIn";
import UserSignInForm from "./signIn-form/UserSignInForm";
import CustomerSignForm from "./signIn-form/CustomerSignForm";
import AuthenticateUser from "./authenticate-component/AuthenticateUser";
import AuthenticateCustomer from "./authenticate-component/AuthenticateCustomer";
import UserLoginComponent from "./login-component/UserLoginComponent";
import CustomerLoginComponent from "./login-component/CustomerLoginComponent";
import Companies from "./static-component/Companies";
import Customers from "./static-component/Customers";
import Features from "./static-component/Features";
import SignUp from "./signUp-component/SignUp";
import UserSignUpForm from "./signUp-form/UserSignUpForm";
import CustomerSignUp from "./signUp-form/CustomerSignUp";
import UpdateUser from "./update-component/UpdateUser";
import UpdateCustomer from "./update-component/UpdateCustomer";
import TestimonialForm from "./testimonial-form/TestimonialForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userSignIn" element={<UserSignInForm />} />
        <Route path="/customerSignIn" element={<CustomerSignForm />} />
        <Route path="/authenticateUser" element={<AuthenticateUser />} />
        <Route path="/authenticateCustomer" element={<AuthenticateCustomer />} />
        <Route path="/userLogin" element={<UserLoginComponent />} />
        <Route path="/customerLogin" element={<CustomerLoginComponent />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userSignUp" element={<UserSignUpForm />} />
        <Route path="/customerSignUp" element={<CustomerSignUp />} />
        <Route path="/userLogin/+/updateUser" element={<UpdateUser />} />
        <Route path="/customerLogin/+/updateUser" element={<UpdateCustomer />} />
        <Route path="/addTestimonial" element={<TestimonialForm />} />
      </Routes>
    </Router>
  );
}

export default App;
