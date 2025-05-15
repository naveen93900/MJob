import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/styles/AdminLogin.css';

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = admin;

    if (email === 'admin@gmail.com' && password === 'admin123') {
      setMessage('✅ Login successful. Redirecting...');
      setTimeout(() => {
        navigate('/post-job'); // Redirect to Posting Page
      }, 1000);
    } else {
      setMessage('❌ Invalid admin credentials. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <form className="form-container form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={admin.email}
          onChange={handleChange}
          required
          placeholder="admin@example.com"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={admin.password}
          onChange={handleChange}
          required
          placeholder="Enter secure password"
        />

        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
        <p className="note">Admin access only. Ensure credentials are secure.</p>
      </form>
    </div>
  );
};

export default AdminLogin;
