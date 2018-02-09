import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import ReactPlayer from 'react-player';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

//--------------------MAIN COMPONENTS--------------------//
import HeaderContainer from './header_container';
import SidebarContainer from './sidebar_container';
import PlayerMain from './main_player';
//-------------------------------------------------------//

import SessionFormContainer from './session_form/session_form_container';

import playlistProfileContainer from './playlist/playlist_profile_container';
import albumProfileContainer from './albums/album_profile_container';
import artistProfileContainer from './artists/artist_profile_container';

import entityIndexContainer from './entity_index_container';
import artistsIndexContainer from './artists/artists_index_container';
import albumIndexContainer from './albums/album_index_container';
import SearchContainer from './search/search_container';

const main = () => (
  <div>
    <div id="full-browser-window">




      <div id="sidebar-and-browse-common-parent">
        <aside id="sidebar-parent">
          <SidebarContainer />
        </aside>


        <main id="browse-parent">
          <Route path="/" component={HeaderContainer}/>
          <div id='browse-content'>
            <Switch>
              <ProtectedRoute exact path="/library/artists/:artistId/albums"
                              component={albumIndexContainer}
              />

              <ProtectedRoute exact path="/library/artists/:artistId"
                              component={artistProfileContainer}
              />

              <ProtectedRoute exact path="/library/artists"
                              component={artistsIndexContainer}
              />

              <ProtectedRoute exact path="/library/albums"
                              component={albumIndexContainer}
              />

              <ProtectedRoute exact path="/library/albums/:albumId"
                              component={albumProfileContainer}
              />

              <ProtectedRoute exact path="/library/playlists"
                              component={playlistProfileContainer}
              />


              <ProtectedRoute exact path="/library/playlists/:playlistId"
                              component={playlistProfileContainer}
              />

              <ProtectedRoute exact path="/search"
                component={SearchContainer}
              />

            </Switch>
          </div>
        </main>
      </div>
      <PlayerMain id="player" className='animated fadeInUp'/>
      {/*<div id='smokedglass'>.</div>*/}
    </div>
  </div>
);

export default main;
