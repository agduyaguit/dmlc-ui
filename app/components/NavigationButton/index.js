

import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

function NavigationButton(props) {
  const {
    to, label
  } = props;

  return (
    <NavLink className="router-link" activeClassName="active" exact to={to}>
      {label}
    </NavLink>
  );
}

NavigationButton.propTypes = {
  to: '',
  label: ''
};

export default NavigationButton;
