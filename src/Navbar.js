import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"blue"}}>
      <a className="navbar-brand" href="/">
        Cart
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-flex-row justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ml-1">{cartCount}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
