import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTISTS,
         RECEIVE_ARTIST
} from '../actions/artists_actions';


const artistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return merge({}, oldState, action.artists);

    case RECEIVE_ARTIST:
      newState = merge({}, oldState);
      newState[action.artist.id] = action.artist;
      return newState;

    default:
      return oldState;
  }
};

export default artistsReducer;
