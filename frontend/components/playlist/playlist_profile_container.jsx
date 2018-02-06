import { connect } from 'react-redux';
import playlistProfile from './playlist_profile';

import { fetchPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlists_actions';
import { logout } from '../../actions/session_actions';

// let path = "/library/playlists/:playlistId";

const mapStateToProps = (state, ownProps) => ({
  songs: [1, 2, 3, 4, 5, 6, 7],
  playlists: state.entities.playlists,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(playlistProfile);
