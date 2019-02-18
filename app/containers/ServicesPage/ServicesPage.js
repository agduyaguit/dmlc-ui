/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Services we offer..." />
        </Helmet>
        <h1>Services</h1>
        <ul />
        <i>and much more...</i>
      </div>
    );
  }
}
