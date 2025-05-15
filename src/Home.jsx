import React, { useEffect, useState } from 'react';
import '../src/styles/Home.css';
import Navbar from './Navbar';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs?_limit=6')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="lux-home-container">
        <header className="lux-header">
          <h1 className="lux-title">Latest Jobs</h1>
          <p className="lux-subtitle">
            Discover high-paying opportunities curated for you. Elegant experience for job seekers.
          </p>
        </header>

        <section className="lux-job-grid">
          {jobs.map((job) => (
            <div key={job.id} className="lux-job-card">
              <h2 className="lux-job-title">{job.role}</h2>
              <p className="lux-company">{job.company} - {job.location || 'Remote'}</p>
              <p className="lux-job-desc">{job.about.slice(0, 100)}...</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="lux-btn">
                View Details
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
