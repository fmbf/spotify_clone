import merge from 'lodash/merge';
import shuffle from 'lodash/shuffle';
import { RECEIVE_SONGS, RECEIVE_SONGS_INTERRUPT } from '../actions/songs_actions';

import { TOGGLE_PLAY,
         TOGGLE_REPEAT,
         TOGGLE_MUTE,
         NEXT_SONG,
         PREV_SONG,
         QUEUE_SONGS_REPLACE,
         QUEUE_HISTORY_REPLACE
} from '../actions/player_actions';


const initialState = {
  prevSong          : null,
  currentSong       : null,
  currentSongTitle  : null,
  nextSong          : null,
  title             : null,
  artist            : null,
  album             : null,
  albumId           : null,
  playing           : false, // true = start playing immed for test
  mute              : false,
  repeat            : false,
  queue             : [],
  prevSongQueue     : [],
  songImgPath       : null,
  song_path         : null
};

export default (state = initialState, action) => {

  Object.freeze(state);

  let newState;
  let queue;
  let newQueue;
  let oldQueue;
  let prevSongQueue;
  // let tracksList;

  switch(action.type) {

    // case RECEIVE_SONGS:
    //   newState = merge({}, state);
    //
    //   // newState.queue = newState.queue.concat(Object.values(action.songs)); // dont replace the queue!
    //   newState.queue = Object.values(action.songs);
    //   newState.currentSong = newState.queue[0];
    //   newState.currentSongTitle = newState.queue[0].title;
    //   newState.song_path = newState.queue[0].song_path;
    //   newState.title = newState.queue[0].title;
    //   newState.artist = newState.queue[0].artist;
    //   newState.album = newState.queue[0].album;
    //   newState.albumId = newState.queue[0].album_id;
    //   return newState;

    case QUEUE_SONGS_REPLACE:
      newState = merge({}, state);

      // newState.queue = newState.queue.concat(Object.values(action.songs)); // dont replace the queue!
      newState.queue = Object.values(action.songs);
      newState.currentSong = newState.queue[0];
      newState.currentSongTitle = newState.queue[0].title;
      newState.song_path = newState.queue[0].song_path;
      newState.title = newState.queue[0].title;
      newState.artist = newState.queue[0].artist;
      newState.album = newState.queue[0].album;
      newState.albumId = newState.queue[0].album_id;
      return newState;

    case QUEUE_HISTORY_REPLACE:
      newState = merge({}, state);
      newState.prevSongQueue = action.songs;
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

      if (!newState.queue || newState.queue.length < 1) { // if queue is empty, just stop playback
        newState = merge({}, state);
        newState.queue = [];
        newState.playing = !state.playing;
        return newState;
      }


      newState.prevSongQueue.unshift(newState.queue.shift());
      newQueue = newState.queue;
      newState.currentSong = newQueue[0];

      newState.currentSong = newQueue[0];
      newState.song_path = newQueue[0].song_path;
      newState.title = newQueue[0].title;
      newState.artist = newState.queue[0].artist;
      newState.album = newState.queue[0].album;
      return newState;

    case PREV_SONG:
      newState = merge({}, state);
      newState.queue.unshift(newState.prevSongQueue.shift());
      newQueue = newState.queue;
      newState.currentSong = newQueue[0];

      newState.currentSong = newQueue[0];
      newState.song_path = newQueue[0].song_path;
      newState.title = newQueue[0].title;
      newState.artist = newState.queue[0].artist;
      newState.album = newState.queue[0].album;
      return newState;

    default:
      return state;
  }
};
