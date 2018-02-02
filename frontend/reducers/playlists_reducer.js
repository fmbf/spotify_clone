import merge from 'lodash/merge';

import { RECEIVE_ALL_PLAYLISTS,
         RECEIVE_PLAYLIST,
         REMOVE_PLAYLIST
} from '../actions/playlists_actions';


const playlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, oldState, action.playlists);

    case RECEIVE_PLAYLIST:
      debugger
      newState = merge({}, oldState);
      newState[action.playlist.id] = action.playlist;
      return newState;

    case REMOVE_PLAYLIST:
      newState = merge({}, oldState);
      delete newState[action.playlist.id];
      return newState;

    default:
      return oldState;
  }

};

export default playlistsReducer;
