import React from 'react'
import '../bodyStyle.css'
import Testimonial from '../testimonial-component/Testimonial';
import Navigation from '../nav-component/Navigation';
import Footer from '../footer-component/Footer';

function HomePage() {
  return (
    <>
      <Navigation />
      <main className='body-container'>
        <header className='space'>
          <h3>Get testimonials from your customers with ease</h3>
          <p>Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.</p>
        </header>

        <div style={style.testimonialscontainer}>
          <Testimonial name="Hannah Maslar"
            title="Head of Customer Marketing & Community, Mixpanel"
            message="I LOVE Testimonial and so does our entire company! In just one month of being a customer, I've been thoroughly impressed by the speed of innovation and new features released. The team is constantly open to my feedback and not only listens to what I have to say but makes my ideas happen." />

          <Testimonial name="Madeleine Work"
            title="Content Marketing Manager at Chili Piper 🌶️"
            message="Chili Piper just implemented our Wall of Love using Testimonial. So far results have been 🔥🔥🔥Check it out: chilipiper.com/wall-of-love" />

          <Testimonial name="Andrew Gazdecki"
            title="Founder and CEO of Acquire.com"
            message="Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive new leads to our business." />


          <Testimonial name="Taylor Bogar"
            title="Customer Marketing | ex-Apollo.io"
            message="I love Testimonial. I’ve used it at 3 different orgs since 2021 & have referred TONS of people over. So excited for it! Well done team!" />

          <Testimonial name="Tibo"
            title="I've been using testimonial.tolast few weeks and I absolutely LOVE it❤️"
            message="Once you start, you understand how it boosts your social proof. Worth every penny." />

          <Testimonial name="John"
            title="Customer Marketing | ex-Apollo.io"
            message="Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive new leads to our business." />
        </div>
      </main>

      <Footer />
    </>
  )
}

const style = {
  testimonialscontainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    paddingTop: "110px",
  },
};

export default HomePage