import merge from 'lodash/merge';
import shuffle from 'lodash/shuffle';import { RECEIVE_SONGS } from '../actions/songs_actions';

import { TOGGLE_PLAY,
         TOGGLE_REPEAT,
         TOGGLE_MUTE,
         NEXT_SONG,
         PREV_SONG
} from '../actions/player_actions';


const initialState = {
  currentSong   : null,
  title         : null,
  artist        : null,
  album         : null,
  playing       : true,
  mute          : false,
  repeat        : false,
  queue         : [],
  songImgPath   : null,
  song_path     : null
};

export default (state = initialState, action) => {

  Object.freeze(state);

  let newState;
  let newQueue;
  let oldQueue;
  // let tracksList;

  switch(action.type) {

    case RECEIVE_SONGS:
      newState = merge({}, state);


      newState.queue = Object.values(action.songs);
      newState.currentSong = newState.queue[0].id;
      newState.song_path = newState.queue[0].song_path;
      newState.title = newState.queue[0].title;
      newState.artist = newState.queue[0].artist;
      newState.album = newState.queue[0].album;
      return newState;

    case TOGGLE_PLAY:
      newState = merge({}, state);

      newState.playing = !state.playing;
      return newState;

    case TOGGLE_REPEAT:
      newState = merge({}, state);
      newState.repeat = !state.repeat;
      return newState;

    case TOGGLE_MUTE:
      newState = merge({}, state);
      newState.mute = !state.mute;
      return newState;

    case NEXT_SONG:
      newState = merge({}, state);
      newQueue = newState.queue;

      newState.currentSong = newQueue[0].id;
      newState.song_path = newQueue[0].song_path;
      newState.title = newQueue[0].title;
      newState.artist = newState.queue[0].artist;
      newState.album = newState.queue[0].album;
      return newState;

    case PREV_SONG:
      newState = merge({}, state);
      oldQueue = state.queue;
      newQueue = newState.queue;

      newState.currentSong = newQueue[0].id;
      newState.song_path = newQueue[0].song_path;
      newState.title = newQueue[0].title;
      newState.artist = newState.queue[0].artist;
      newState.album = newState.queue[0].album;
      return newState;

    default:
      return state;
  }
};
