import { connect } from 'react-redux';
import entityIndex from './entity_index';

import { fetchPlaylists } from '../actions/playlists_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong, queueSongsReplace } from '../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let songs;

  if (ownProps.songs) {
    songs = ownProps.songs;
  }

  return {
    audio: state.playback,
    allSongs: state.entities.songs,
    songs,
    artists: Object.values(state.entities.artists),

    playlists: Object.values(state.entities.playlists),
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),

  togglePlay: () => dispatch(togglePlay()),
  queueSongsReplace: (songs) => dispatch(queueSongsReplace(songs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(entityIndex);
