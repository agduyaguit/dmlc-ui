// @flow
import React from 'react';
import NavigationButton from '../NavigationButton';
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
          <NavigationButton buttons={NavigationButtons}></NavigationButton>
        </div>
      </div>
    );
  }
}

export default Header;
