import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/services">
            Services
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
