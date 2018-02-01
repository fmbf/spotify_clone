import { connect } from 'react-redux';
import profile from './profile';

import { fetchPlaylist } from '../../actions/playlists_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  playlists: state.entities.playlists,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(profile);
