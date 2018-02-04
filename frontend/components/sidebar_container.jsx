import { connect } from 'react-redux';
import sidebar from './sidebar';

import { fetchPlaylist, fetchPlaylists } from '../actions/playlists_actions';

let path = "/library/playlists/:playlistId";

const mapStateToProps = (state, ownProps) => ({
  playlists: Object.values(state.entities.playlists),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
