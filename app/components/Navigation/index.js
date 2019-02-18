

import React from 'react';
import NavigationButton from '../NavigationButton';


function Navigation(props) {
  return props.buttons.map((button) => (<NavigationButton key={`button_${button.label}`} to={button.url} label={button.label}></NavigationButton>));
}

Navigation.propTypes = {
  buttons: []
};

export default Navigation;
