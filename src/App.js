import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './screens/Login'
import HomePage from './screens/Home'

import * as ROUTES from './constants/routes';
import { withAuthentication } from './hooks';
import './App.css'

const App = () => (
    <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={HomePage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
    </div>
  </Router>
);
 
export default withAuthentication(App);
