import React, { useEffect, useState } from 'react';
import '../src/styles/JobsPage.css';
import Navbar from './Navbar';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    role: '',
    location: '',
    skills: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.role ? job.role.toLowerCase().includes(filters.role.toLowerCase()) : true) &&
      (filters.location ? job.location?.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
      (filters.skills ? job.skills.toLowerCase().includes(filters.skills.toLowerCase()) : true)
    );
  });

  return (
    <>
      <Navbar />
      <div className="jobs-page-container">
        <header className="jobs-header">
          <h1>Explore Jobs</h1>
          <p>Find jobs that match your skills. Filter by role, location, or skills.</p>
        </header>

        <div className="filter-section">
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={filters.role}
              onChange={handleFilterChange}
              placeholder="e.g., Frontend Developer"
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="e.g., Hyderabad"
            />
          </label>

          <label>
            Skills:
            <input
              type="text"
              name="skills"
              value={filters.skills}
              onChange={handleFilterChange}
              placeholder="e.g., React, Node"
            />
          </label>
        </div>

        <section className="job-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <h2>{job.role}</h2>
                <h4>{job.company} - {job.location}</h4>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Skills:</strong> {job.skills}</p>
                <p><strong>Qualification:</strong> {job.qualification} ({job.passoutYear})</p>
                <p>{job.about.slice(0, 100)}...</p>
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="apply-btn">
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <p>No jobs found matching your filters.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default JobsPage;
