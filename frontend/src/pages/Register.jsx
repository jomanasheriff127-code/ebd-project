import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-image register-image">
        <div className="auth-image-text">
          <p>JOIN THE RENTIQUE COMMUNITY</p>
          <h2>More style. Less commitment.</h2>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-box">
          <p className="eyebrow">YOUR STYLE JOURNEY STARTS HERE</p>
          <h1>Join Rentique.</h1>

          <p className="auth-description">
            Create your account and discover a smarter way to dress.
          </p>

          <form className="auth-form">
            <label htmlFor="register-name">Full Name</label>
            <input
              id="register-name"
              type="text"
              placeholder="Enter your full name"
            />

            <label htmlFor="register-email">Email Address</label>
            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
            />

            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
            />

            <button className="dark-btn form-btn" disabled>
              Create Account →
            </button>
          </form>

          <p className="form-note">
            Registration will be available once authentication is connected.
          </p>

          <p className="auth-switch">
            Already have an account?{' '}
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
