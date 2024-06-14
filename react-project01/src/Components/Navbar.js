import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <>
       <nav className="navbar"></nav>
          <div className="navbar-container">
              <Link to="/" className="navbar-logo">
              HEY <i className="fab fa-typo3"></i>
              </Link>
          </div>
      </>
    )
  }
  
  export default Navbar
  