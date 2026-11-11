
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <Link to="/" className="logo" id="project-name">
            Rentique.
          </Link>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <a href="/#about">About</a>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="login-btn">Log In</Link>
            <Link to="/register" className="join-btn">Join Rentique</Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer className="footer">
          <span className="footer-logo">Rentique.</span>
          <p>Style is meant to be shared.</p>
          <small>© 2026 Rentique. All rights reserved.</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
