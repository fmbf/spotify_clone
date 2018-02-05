import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import App from './App';
import MainContainer from './main_container';
import welcomeComponent from './welcome';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>

        <Switch>
          <AuthRoute path="/welcome" component={welcomeComponent}/>
          <AuthRoute exact path="/login" component={SessionFormContainer} />
          <AuthRoute exact path="/signup" component={SessionFormContainer} />
          <ProtectedRoute path="/" component={MainContainer} />
        </Switch>

    </HashRouter>
  </Provider>
);

export default Root;
