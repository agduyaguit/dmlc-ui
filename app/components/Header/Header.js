// @flow
import React from 'react';
import Navigation from '../Navigation';
import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const NavigationButtons = [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'About',
        url: '/about'
      },
      {
        label: 'Our Services',
        url: '/services'
      },
      {
        label: 'Our Learners',
        url: '/learners'
      },
      {
        label: 'Our Staff',
        url: '/staff'
      }
    ];

    return (
      <div className="header">
        <div className="background" />
        <div className="nav-bar">
          <Navigation buttons={NavigationButtons}></Navigation>
        </div>
      </div>
    );
  }
}

export default Header;
