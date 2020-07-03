import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './screens/Login'

import * as ROUTES from './constants/routes';
import { withAuthentication } from './context';
import './App.css'

const App = () => (
    <Router>
    <div>
 
      <Route exact path={ROUTES.LANDING} component={()=><>LAND</>} />
      <Route path={ROUTES.SIGN_UP} component={LoginPage} />
    </div>
  </Router>
);
 
export default withAuthentication(App);
