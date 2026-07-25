import React from 'react';

const freeCourses = [
  { title: 'MEAN Stack Essentials', level: 'Beginner' },
  { title: 'MERN Stack Project Lab', level: 'Intermediate' },
  { title: 'Java Programming Basics', level: 'Beginner' },
  { title: 'GenAI for Developers', level: 'Intermediate' }
];

function StudentDashboard({ user, onLogout }) {
  return (
    <div className="dashboard-shell">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">Student Dashboard</p>
            <h2>Welcome back, {user?.name || 'Student'}!</h2>
            <p>You are signed in and ready to explore free courses.</p>
          </div>
          <button className="secondary-button" onClick={onLogout}>Logout</button>
        </div>

        <div className="dashboard-grid">
          <section className="dashboard-panel">
            <h3>Your Profile</h3>
            <p><strong>Username:</strong> {user?.username}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Mobile:</strong> {user?.mobile}</p>
          </section>

          <section className="dashboard-panel">
            <h3>Free Courses</h3>
            <div className="course-list">
              {freeCourses.map((course) => (
                <div key={course.title} className="course-item">
                  <div>
                    <strong>{course.title}</strong>
                    <p>{course.level}</p>
                  </div>
                  <button className="auth-button small">Enroll</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
