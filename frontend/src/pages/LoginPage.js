import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import '../components/auth/AuthStyles.css';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
import StudentDashboard from '../components/auth/StudentDashboard';
import seedUsers from '../store.json';

const STORAGE_KEY = 'lms-users';
const SESSION_KEY = 'lms-active-user';

function LoginPage() {
  const [mode, setMode] = useState('signin');
  const [signinData, setSigninData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', username: '', email: '', mobile: '', password: '' });
  const [users, setUsers] = useState(seedUsers || []);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (Array.isArray(storedUsers) && storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedUsers || []));
      setUsers(seedUsers || []);
    }

    const active = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
    if (active) {
      setActiveUser(active);
    }
  }, []);

  const handleSigninChange = (e) => {
    setSigninData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupChange = (e) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveUsers = (updatedUsers) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const foundUser = users.find(
      (user) => user.username === signinData.username && user.password === signinData.password
    );

    setTimeout(() => {
      if (foundUser) {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(foundUser));
        setActiveUser(foundUser);
        setMessage('Login successful. Welcome to your dashboard.');
      } else {
        setMessage('Invalid username or password.');
      }
      setLoading(false);
    }, 400);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const exists = users.some((user) => user.username === signupData.username || user.email === signupData.email);
    if (exists) {
      setTimeout(() => {
        setMessage('User already exists. Please sign in instead.');
        setLoading(false);
      }, 400);
      return;
    }

    const newUser = {
      id: Date.now(),
      name: signupData.name,
      username: signupData.username,
      email: signupData.email,
      mobile: signupData.mobile,
      password: signupData.password
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
      setActiveUser(newUser);
      setMessage('Account created successfully. Welcome to the dashboard.');
      setLoading(false);
      setSignupData({ name: '', username: '', email: '', mobile: '', password: '' });
    }, 400);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setActiveUser(null);
    setMessage('You have been logged out.');
  };

  if (activeUser) {
    return <StudentDashboard user={activeUser} onLogout={handleLogout} />;
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome to LMS Portal</h2>
        <p>Sign in to continue or create a new student account.</p>

        <div className="auth-toggle">
          <button className={mode === 'signin' ? 'active' : ''} onClick={() => setMode('signin')} type="button">
            Sign In
          </button>
          <button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')} type="button">
            Sign Up
          </button>
        </div>

        {mode === 'signin' ? (
          <SignInForm formData={signinData} onChange={handleSigninChange} onSubmit={handleSignIn} loading={loading} />
        ) : (
          <SignUpForm formData={signupData} onChange={handleSignupChange} onSubmit={handleSignUp} loading={loading} />
        )}

        {message && <div className="auth-message">{message}</div>}
      </div>
    </div>
  );
}

export default LoginPage;
