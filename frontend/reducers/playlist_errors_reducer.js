import {
  RECEIVE_PLAYLIST_ERRORS,
  RECEIVE_PLAYLIST
} from '../actions/playlists_actions';


const playlistErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_PLAYLIST_ERRORS:
      return action.errors;

    case RECEIVE_PLAYLIST:
      return [];

    default:
      return state;
  }
};

export default playlistErrorsReducer;
