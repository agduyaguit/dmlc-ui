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
        label: 'Services',
        url: '/services'
      }];
    return (
      <div className="header">
        <div className="nav-bar">
          <Navigation buttons={NavigationButtons}></Navigation>
        </div>
      </div>
    );
  }
}

export default Header;
