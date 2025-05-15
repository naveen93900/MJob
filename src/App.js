
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Blog from './Blog'
import About from './About'
import UserLogin from './UserLogin';
import Signup from './Signup';
import LandingPage from './LandingPage';
import AdminLogin from './AdminLogin';
import JobsPage from './JobsPage';
import PostJob from './PostJob';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/post-job" element={<PostJob />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
