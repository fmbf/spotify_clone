import { connect } from 'react-redux';
import songsIndex from './songs_index';
import { withRouter } from 'react-router-dom';
import {addSongToPlaylist} from '../../actions/songs_actions';


const mapStateToProps = (state, ownProps) => {
  let songs;

  if (ownProps.match.params.playlistId) {
    songs = Object.values(state.entities.playlists).filter(song => song.playlists_ids === parseInt(ownProps.match.params.playlistId));
  } else {
    songs = Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.match.params.albumId));
  }

  return {
    songs,
    playlists: Object.values(state.entities.playlists).filter(playlist => playlist.author_id === state.session.currentUser.id),
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(songsIndex));
