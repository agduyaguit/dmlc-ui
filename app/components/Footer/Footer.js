import React from 'react';
import './style.scss';

const Footer = () => (
  <footer>
    <section>This project is licensed under the MIT license.</section>
    <section>Copyright &copy; 2019 decodingminds.com</section>
    <section>
      Boilerplate{' '}
      <span role="img" aria-label="heart-emoji">
        ❤️
      </span>{' '}
      by{' '}
      <a href="https://github.com/flexdinesh/react-redux-boilerplate">
        React-Redux BoilerPlate
      </a>
    </section>
  </footer>
);

export default Footer;
