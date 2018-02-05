import merge from 'lodash/merge';

import { RECEIVE_ALBUMS,
         RECEIVE_ALBUM
} from '../actions/albums_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, oldState, action.albums);

    case RECEIVE_ALBUM:
      newState = merge({}, oldState);
      newState[action.album.id] = action.album;
      return newState;

    default:
      return oldState;
  }

};

export default albumsReducer;
