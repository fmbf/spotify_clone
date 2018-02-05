import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';


const entitiesReducer = combineReducers({
  playlists: playlistsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
});

export default entitiesReducer;
