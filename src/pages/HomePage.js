import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h2>Home Page</h2>
      <p className="mt-2">
        <Link to="/railaru">railaru</Link> on GitHub.
      </p>
    </div>
  );
}
