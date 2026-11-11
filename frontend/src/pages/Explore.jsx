import { useState } from 'react';

function Explore() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  return (
    <div className="explore-page">
      <section className="explore-banner">
        <p className="eyebrow">THE RENTIQUE COLLECTION</p>
        <h1>Discover your next statement.</h1>
        <p>
          Beautiful fashion, new possibilities, endless occasions.
        </p>
      </section>

      <section className="explore-content">
        <div className="collection-heading">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>The Collection</h2>
          </div>
          <p>Discover something worth wearing.</p>
        </div>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search for dresses, bags, accessories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Dresses">Dresses</option>
            <option value="Bags">Bags</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="empty-collection">
          <div className="empty-symbol">✦</div>
          <h3>Something beautiful is coming.</h3>
          <p>
            Our rental collection will appear here when
            listings are added to Rentique.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Explore;
