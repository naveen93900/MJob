import React, { useState } from 'react';
import '../src/styles/PostJob.css';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const [job, setJob] = useState({
    company: '',
    role: '',
    experience: '',
    skills: '',
    qualification: '',
    passoutYear: '',
    about: '',
    link: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });

      if (res.ok) {
        alert('Job posted successfully!');
        navigate('/home'); // Redirect to the home page or job listing
      } else {
        alert('Failed to post job.');
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="post-job-container">
      <form className="post-job-form" onSubmit={handleSubmit}>
        <h2>Post a New Job</h2>

        <label>Company</label>
        <input
          name="company"
          value={job.company}
          onChange={handleChange}
          required
        />

        <label>Role</label>
        <input
          name="role"
          value={job.role}
          onChange={handleChange}
          required
        />

        <label>Experience</label>
        <input
          name="experience"
          value={job.experience}
          onChange={handleChange}
          required
        />

        <label>Skills</label>
        <input
          name="skills"
          value={job.skills}
          onChange={handleChange}
          required
        />

        <label>Qualification</label>
        <input
          name="qualification"
          value={job.qualification}
          onChange={handleChange}
          required
        />

        <label>Year of Passout</label>
        <input
          name="passoutYear"
          value={job.passoutYear}
          onChange={handleChange}
          required
        />

        <label>About Requirement</label>
        <textarea
          name="about"
          value={job.about}
          onChange={handleChange}
          required
        />

        <label>Job Link</label>
        <input
          name="link"
          value={job.link}
          onChange={handleChange}
          required
        />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
