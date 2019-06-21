import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="row mt-4 mb-3">
        <Link to="/">
          <h1 className="ml-4 col">Home</h1>
        </Link>
        <Link to="/railaru">
          <div className="ml-2 mt-3 col">railaru</div>
        </Link>
      </div>
      <hr />
    </React.Fragment>
  );
}
