import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';
import LiveVirtualClassPage from './pages/LiveVirtualClassPage';
import ExternalDataPage from './pages/ExternalDataPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="navbar-brand">LMS Portal</Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/live-class">Live Class</Link></li>
              <li><Link to="/external-data">External Data</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/live-class" element={<LiveVirtualClassPage />} />
            <Route path="/external-data" element={<ExternalDataPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 LMS Portal - All Rights Reserved</p>
            <a href="https://github.com/komalghodke" target="_blank" rel="noreferrer">
              Developed By Komal G
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
