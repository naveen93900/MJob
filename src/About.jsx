import React from 'react';
import '../src/styles/About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Job App</h1>
        <p>
          Welcome to our platform — a unique job marketplace where **you can find jobs, post jobs, and earn money** just by sharing opportunities.
        </p>

        <h2>🔍 Find the Right Job</h2>
        <p>
          Whether you're a student, professional, or freelancer, our app helps you discover a wide range of job listings posted by real users and companies. Filter by category, location, or skill to find what suits you best.
        </p>

        <h2>💼 Post Jobs & Earn</h2>
        <p>
          Got a job opportunity to share? Post it on our app! Our system rewards you based on how many users view your job post. The more relevant and engaging your post is, the more you earn. It's a win-win!
        </p>

        <h2>🌟 Why Choose Us?</h2>
        <ul>
          <li>✔ Easy-to-use and clean interface</li>
          <li>✔ Post jobs and monetize your listings</li>
          <li>✔ Discover verified job opportunities</li>
          <li>✔ Earn based on views — not just clicks</li>
          <li>✔ Completely free to start</li>
        </ul>

        <p className="footer-note">
          Join thousands of users who are already finding and sharing job opportunities in a smarter way. Whether you're hiring or hunting — we've got you covered!
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
