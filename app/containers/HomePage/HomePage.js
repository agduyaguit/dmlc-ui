/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Decoding Minds Learning Center </h2>
            <p>
              <i>Comming soon...</i>
            </p>
          </section>
        </div>
      </article>
    );
  }
}
