import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE NEW WAY TO WEAR FASHION</p>

          <h1>
            Your dream wardrobe.
            <br />
            <em>Without the price tag.</em>
          </h1>

          <p className="hero-description">
            Rent beautiful dresses, statement bags, and timeless
            accessories for every occasion. Look extraordinary,
            spend thoughtfully.
          </p>

          <Link to="/explore" className="dark-btn">
            Explore the Collection
            <span> →</span>
          </Link>

          <p className="hero-note">
            RENT MORE. OWN LESS. LOOK AMAZING.
          </p>
        </div>

        <div className="hero-image">
          <div className="image-label">
            <span>THE RENTIQUE EDIT</span>
            <strong>Style for every moment</strong>
          </div>
        </div>
      </section>

      <section className="collection-section">
        <p className="eyebrow">CURATED FOR YOU</p>
        <h2>Find your next look.</h2>
        <p className="section-description">
          Your next favorite outfit is just a rental away.
        </p>

        <div className="category-grid">
          <Link to="/explore" className="category-card">
            <div className="category-image dresses-image"></div>
            <div className="category-info">
              <h3>Dresses</h3>
              <span>Explore →</span>
            </div>
          </Link>

          <Link to="/explore" className="category-card">
            <div className="category-image bags-image"></div>
            <div className="category-info">
              <h3>Bags</h3>
              <span>Explore →</span>
            </div>
          </Link>

          <Link to="/explore" className="category-card">
            <div className="category-image accessories-image"></div>
            <div className="category-info">
              <h3>Accessories</h3>
              <span>Explore →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="how-section">
        <p className="eyebrow">THE RENTIQUE EXPERIENCE</p>
        <h2>Style made simple.</h2>

        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>
            <h3>Discover</h3>
            <p>Explore pieces shared by our fashion community.</p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Request</h3>
            <p>Choose your dates and request your perfect look.</p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Wear & Return</h3>
            <p>Enjoy your occasion, then return the piece.</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow">OUR PHILOSOPHY</p>
        <h2>Great style deserves more than one moment.</h2>
        <p>
          We believe fashion should be accessible, affordable,
          and sustainable. Rentique connects fashion lovers
          through a community built around sharing, not
          unnecessary buying.
        </p>
        <Link to="/register" className="dark-btn">
          Join Our Community →
        </Link>
      </section>
    </>
  );
}

export default Home;
