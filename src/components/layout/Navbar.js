import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto ">
        <FontAwesomeIcon color="white" icon={faMusic} /> LyricFinder
      </span>
    </nav>
  );
};

export default Navbar;
