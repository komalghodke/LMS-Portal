import React from 'react';

function SignInForm({ formData, onChange, onSubmit, loading }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="signin-username">Username</label>
        <input
          id="signin-username"
          name="username"
          type="text"
          value={formData.username}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="signin-password">Password</label>
        <input
          id="signin-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={onChange}
          required
        />
      </div>

      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? 'Please wait...' : 'Sign In'}
      </button>
    </form>
  );
}

export default SignInForm;
