import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-image login-image">
        <div className="auth-image-text">
          <p>THE ART OF RENTING</p>
          <h2>Every occasion deserves a little magic.</h2>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-box">
          <p className="eyebrow">WELCOME BACK</p>
          <h1>Log in to Rentique.</h1>

          <p className="auth-description">
            Your next favorite look is waiting for you.
          </p>

          <form className="auth-form">
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
            />

            <button className="dark-btn form-btn" disabled>
              Log In →
            </button>
          </form>

          <p className="form-note">
            Login will be available once authentication is connected.
          </p>

          <p className="auth-switch">
            New to Rentique?{' '}
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
