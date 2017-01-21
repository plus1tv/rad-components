import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import { css, StyleSheet } from 'aphrodite';
import './index.css';

import Test from './Test.js';
import Home from './components/Home/Home.js';
import Documentation from './components/Documentation/Documentation.js';
import NotFound from './components/NotFound.js';
import Footer from './components/Footer.js';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
});

ReactDOM.render(
  <Router>
    <div className={css(styles.container)}>
      <Match exactly pattern='/' component={Home}/>
      <Match pattern="/docs" component={Documentation}/>
      <Match pattern="/test" component={Test}/>
      <Miss component={NotFound}/>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
