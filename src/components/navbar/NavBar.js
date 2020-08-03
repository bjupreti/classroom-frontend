import React from 'react';
import { Link } from '@reach/router';

export default function NavBar() {
  return (
    <nav aria-label="breadcrumb" className="header">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/courses">
            <span>COURSES</span>
          </Link>
        </li>
        {/* <li className="breadcrumb-item active" aria-current="page">Library</li> */}
      </ol>
    </nav>
  );
}
