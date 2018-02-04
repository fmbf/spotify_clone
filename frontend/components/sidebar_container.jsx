import { connect } from 'react-redux';
import sidebar from './sidebar';

import { fetchPlaylist } from '../actions/playlists_actions';

let path = "/library/playlists/:playlistId";

const mapStateToProps = (state, ownProps) => ({
  songs: [1, 2, 3, 4, 5, 6, 7],
  playlists: state.entities.playlists,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
