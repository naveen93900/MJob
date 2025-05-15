import React from 'react';
import '../src/styles/Landingpage.css'
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div>
          
             <div className="home-container">
      <div className="home-content">
        <h1>Welcome to JobConnect</h1>
        <p>
          Discover your next opportunity or help others find theirs. Post jobs, earn rewards, and browse a variety of listings—all in one place.
        </p>

        <div className="home-buttons">
          <Link to="/home" className="btn primary-btn">Find Jobs</Link>
          <Link to="/user-login" className="btn secondary-btn">Post a Job</Link>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5977/5977588.png"
          alt="Job Illustration"
        />
      </div>
    </div>
        </div>
    );
};

export default LandingPage;