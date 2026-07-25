import React from 'react';

function SignUpForm({ formData, onChange, onSubmit, loading }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="signup-name">Name</label>
        <input id="signup-name" name="name" type="text" value={formData.name} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="signup-username">Username</label>
        <input id="signup-username" name="username" type="text" value={formData.username} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" name="email" type="email" value={formData.email} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="signup-mobile">Mobile</label>
        <input id="signup-mobile" name="mobile" type="tel" value={formData.mobile} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" name="password" type="password" value={formData.password} onChange={onChange} required />
      </div>

      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  );
}

export default SignUpForm;
