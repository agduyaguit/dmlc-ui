/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Decoding Minds Learning Center"
      defaultTitle="Decolding Minds Learning Center"
    >
      <meta name="boilerplate" content="A React.js Boilerplate application" />
      <meta name="description" content="Decoding Minds Learning Center" />
      <meta name="description" content="Learning is Fun" />
    </Helmet>
    <Header />
    <div className="app-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
