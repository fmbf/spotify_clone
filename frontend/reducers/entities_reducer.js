import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';


const entitiesReducer = combineReducers({
  songs: songsReducer,
  artists: artistsReducer,
  // users: usersReducer,
  albums: albumsReducer,
  playlists: playlistsReducer,
  // playback: playbackReducer,
});

export default entitiesReducer;
