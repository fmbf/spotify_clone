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

// MAIN COMPONENTS
import PlayerMain from './main_player';
import SidebarContainer from './sidebar_container';
//--------------------------------------------------//

import welcomeComponent from './welcome';
import SessionFormContainer from './session_form/session_form_container';

import playlistProfileContainer from './playlist/playlist_profile_container';
import albumProfileContainer from './albums/album_profile_container';

import entityIndexContainer from './entity_index_container';
import artistsIndexContainer from './artists_index_container';

const App = () => (
  <div>
    <div id="full-browser-window">




      <div id="sidebar-and-browse-common-parent">
        <aside id="sidebar-parent">
          <SidebarContainer />
        </aside>


        <main id="browse-parent">
          <div id='browse-content'>
            <Switch>
              <ProtectedRoute exact path="/library/artists" component={artistsIndexContainer}/>
              <ProtectedRoute exact path="/library/artists/:artistId" component={playlistProfileContainer}/>
              <ProtectedRoute exact path="/library/playlists" component={playlistProfileContainer}/>
              <ProtectedRoute exact path="/library/playlists/:playlistId" component={playlistProfileContainer}/>
              <AuthRoute exact path="/login" component={SessionFormContainer} />
              <AuthRoute exact path="/signup" component={SessionFormContainer} />
              <AuthRoute path="/welcome" component={welcomeComponent}/>
            </Switch>
          </div>
        </main>
      </div>


      <PlayerMain id="player"/>

    </div>
  </div>
);

export default App;
