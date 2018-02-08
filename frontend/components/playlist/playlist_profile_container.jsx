import { connect } from 'react-redux';
import playlistProfile from './playlist_profile';
import { withRouter } from 'react-router-dom';

import { fetchPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlists_actions';
import { removeSongFromPlaylist } from '../../actions/songs_actions';
import { fetchPlaylistSongs } from '../../actions/songs_actions';
import { logout } from '../../actions/session_actions';




const mapStateToProps = (state, ownProps) => {
  let songs = Object.values(state.entities.songs).filter(
    song => {
      if (state.entities.playlists[ownProps.match.params.playlistId].songs_ids) {
        return state.entities.playlists[ownProps.match.params.playlistId].songs_ids.includes(song.id);
      }
    }
  );

  return {
    songs,
    playlists: state.entities.playlists,
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({

  removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(songId, playlistId)),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchPlaylistSongs: (playlistId) => dispatch(fetchPlaylistSongs(playlistId)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  logout: () => dispatch(logout())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(playlistProfile));
