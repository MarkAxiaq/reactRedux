import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Running Malta
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <IndexLink to="/" className="nav-item nav-link">
            Home
          </IndexLink>
          <Link
            to="/about"
            className="nav-item nav-link"
            activeclassName="active">
            About
          </Link>
          <Link
            to="/runners"
            className="nav-item nav-link"
            activeclassName="active">
            Runners
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
