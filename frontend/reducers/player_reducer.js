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
  playing       : false,
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
  // let tracksList;

  switch(action.type) {

    case RECEIVE_SONGS:
      newState = merge({}, state);

      // tracksList = Object.keys(action.songs);
      // newState.songImgPath = newState.queue[0].img_url;
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
      newQueue = state.queue;

      newState.queue = newQueue;
      newState.currentSong = newQueue[0].id;
      newState.song_path = newQueue[0].song_path;
      newState.title = newQueue[0].title;
      // newState.img_url = newQueue[0].img_url;
      return newState;

    default:
      return state;
  }
};
