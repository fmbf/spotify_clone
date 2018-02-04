import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import artistsReducer from './artists_reducer';


const entitiesReducer = combineReducers({
  playlists: playlistsReducer,
  artists: artistsReducer
});

export default entitiesReducer;
