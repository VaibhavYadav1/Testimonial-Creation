import React from "react";
import "./customers.css";
import Navigation from "../nav-component/Navigation";

const testimonials = [
  {
    name: "Hannah Maslar",
    title: "Head of Customer Marketing & Community, Mixpanel",
    message:
      "I LOVE Testimonial and so does our entire company! In just one month of being a customer, I've been thoroughly impressed by the speed of innovation and new features released. The team is constantly open to my feedback and not only listens to what I have to say but makes my ideas happen.",
  },
  {
    name: "Madeleine Work",
    title: "Content Marketing Manager at Chili Piper 🌶️",
    message:
      "Chili Piper just implemented our Wall of Love using Testimonial. So far results have been 🔥🔥🔥Check it out: chilipiper.com/wall-of-love",
  },
  {
    name: "Andrew Gazdecki",
    title: "Founder and CEO of Acquire.com",
    message:
      "Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive new leads to our business.",
  },
  {
    name: "Taylor Bogar",
    title: "Customer Marketing | ex-Apollo.io",
    message:
      "I love Testimonial. I’ve used it at 3 different orgs since 2021 & have referred TONS of people over. So excited for it! Well done team!",
  },
  {
    name: "Tibo",
    title:
      "I've been using testimonial.to last few weeks and I absolutely LOVE it❤️",
    message:
      "Once you start, you understand how it boosts your social proof. Worth every penny.",
  },
  {
    name: "John",
    title: "Customer Marketing | ex-Apollo.io",
    message:
      "Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive new leads to our business.",
  },
];

const Customers = () => {
  return (

    <>
      <Navigation />

      <div className="customers-container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Customers;
