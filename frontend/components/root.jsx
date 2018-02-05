import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Link  } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import App from './App';
import MainContainer from './main_container';
import welcomeComponent from './welcome';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
        <div>

          <AuthRoute exact path="/login"
            component={SessionFormContainer}
          />
          <AuthRoute exact path="/signup"
            component={SessionFormContainer}
          />
          <AuthRoute path="/welcome"
            component={welcomeComponent}
          />

          <ProtectedRoute
            path="/"
            component={MainContainer}
          />
        </div>
    </HashRouter>
  </Provider>
);

export default Root;
