import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { logout } from './actions/session_actions';
import { fetchPlaylists, fetchPlaylist, createPlaylist } from './actions/playlists_actions';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  //--------------------Bootstrap Current User-----------------------//
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //-----------------------------------------------------------------//




  //------------------TESTS------------------//

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = () => store.dispatch(logout());
    window.fetchPlaylists = (userId) => store.dispatch(fetchPlaylists(userId));
    window.createPlaylist = (playlist) => store.dispatch(createPlaylist(playlist));

  //-----------------------------------------//



  ReactDOM.render(<Root store={store} />, root);
});
