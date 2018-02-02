import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import welcomeComponent from './welcome';
import SessionFormContainer from './session_form/session_form_container';

import profileContainer from './profile/profile_container';
import entityIndexContainer from './entity_index_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/library/playlists" component={profileContainer}/>
      <ProtectedRoute exact path="/library/playlists/:playlistId" component={profileContainer}/>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/" component={welcomeComponent}/>
    </Switch>
  </div>
);

export default App;
