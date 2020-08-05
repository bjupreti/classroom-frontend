import React from 'react';
import { Link } from '@reach/router';

export default function Header() {
  return (
    <header className="navbar sticky-top shadow-sm">
      <h1 id="logo">
        <Link to="/" className="navbar-brand h-center">
          {/* <a className="navbar-brand" href="#"> */}
          <img
            src={`${window.location.origin}/logo192.png`}
            className="d-inline-block align-top logo-img"
            alt="logo"
            loading="lazy"
          />
          <span>Classroom</span>
        </Link>
        {/* </a> */}
      </h1>

      <div>
        <img
          src={`${window.location.origin}/profile.png`}
          className="profile-img"
          alt={`${'First Name'}'s pic`}
        />

        {/* <div className="user-options">
          <ul>
            <li>My Profile</li>
            <li>My Courses</li>
            <li>Logout</li>
          </ul>
        </div> */}
      </div>
    </header>
  );
}
