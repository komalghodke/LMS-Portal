import React, { useEffect, useState } from 'react';

function ExternalDataPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to load users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="courses-page">
      <header className="courses-hero">
        <p className="eyebrow">External Data</p>
        <h1>Users from JSONPlaceholder</h1>
        <p className="hero-text">
          This page fetches remote user data and displays it in a responsive table with load and error states.
        </p>
      </header>

      {loading ? (
        <div className="registration-section">
          <p>Loading data...</p>
        </div>
      ) : error ? (
        <div className="registration-section">
          <p className="success-message">{error}</p>
        </div>
      ) : (
        <section className="registration-section">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#0f4c81', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Phone</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #dfe8f1' }}>
                    <td style={{ padding: '0.75rem' }}>{user.name}</td>
                    <td style={{ padding: '0.75rem' }}>{user.email}</td>
                    <td style={{ padding: '0.75rem' }}>{user.phone}</td>
                    <td style={{ padding: '0.75rem' }}>{user.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default ExternalDataPage;
