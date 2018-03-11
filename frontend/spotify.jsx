import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { logout } from './actions/session_actions';
import {
  fetchPlaylists, fetchPlaylist, createPlaylist,
  updatePlaylist, deletePlaylist
} from './actions/playlists_actions';

import { fetchAlbum } from './actions/albums_actions';
import { fetchAllSongs } from './actions/songs_actions';
import { addSongToPlaylist, removeSongFromPlaylist } from './actions/songs_actions';
import { fetchSearchResults } from './actions/search_actions';

import { togglePlay, toggleRepeat, toggleMute, nextSong } from './actions/player_actions';



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

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchPlaylists = (userId) => store.dispatch(fetchPlaylists(userId));
    // window.addSongToPlaylist = (songId, playlistId) => store.dispatch(addSongToPlaylist(songId, playlistId));
    // window.removeSongFromPlaylist = (songId, playlistId) => store.dispatch(removeSongFromPlaylist(songId, playlistId));
    // window.fetchAlbum = (albumId) => store.dispatch(fetchAlbum(albumId));
    // window.createPlaylist = (playlist) => store.dispatch(createPlaylist(playlist));
    // window.updatePlaylist = (playlist) => store.dispatch(updatePlaylist(playlist));
    // window.fetchSearchResults = (query) => store.dispatch(fetchSearchResults(query));
    //
    // window.nextSong = () => store.dispatch(nextSong());
    // window.fetchAllSongs = () => store.dispatch(fetchAllSongs());

  //-----------------------------------------//



  ReactDOM.render(<Root store={store} />, root);
});
