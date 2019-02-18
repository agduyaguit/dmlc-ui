// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

// type Navigation = {
//   label: string,
//   url: string
// };

// type Props = {
//   buttons: Array<Navigation>
// };

function NavigationButton(props) {
  return props.buttons.map((button) => (
    <Link
      key={`button_${button.label}`}
      className="router-link"
      to={button.url}
    >
      {button.label}
    </Link>
  ));
}

NavigationButton.propTypes = {};

export default NavigationButton;
