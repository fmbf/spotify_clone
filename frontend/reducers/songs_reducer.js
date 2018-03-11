import merge from 'lodash/merge';

import { RECEIVE_SONGS,
         RECEIVE_SONG,
         RECEIVE_SONG_INTERRUPT,
         RECEIVE_SONGS_INTERRUPT
} from '../actions/songs_actions';

const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SONGS:
      return merge({}, oldState, action.songs);
    case RECEIVE_SONGS_INTERRUPT:
      return merge({}, oldState, action.songs);

    case RECEIVE_SONG:
      newState = merge({}, oldState);
      newState[action.song.id] = action.song;
      return newState;
    case RECEIVE_SONG_INTERRUPT:
      newState = merge({}, oldState);
      newState[action.song.id] = action.song;
      return newState;

    default:
      return oldState;
  }

};

export default songsReducer;
