import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="h-24 bg-white shadow-md px-4">
      <div className="flex items-center h-full">
        <Link to="/" className="text-h4 underline underline-offset-4">
          Play 11
          <span className="text-red-600">Stats</span>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
