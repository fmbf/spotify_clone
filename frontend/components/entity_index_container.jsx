import { connect } from 'react-redux';
import entityIndex from './entity_index';

import { fetchPlaylists } from '../actions/playlists_actions';

const mapStateToProps = (state, ownProps) => ({
  playlists: Object.values(state.entities.playlists),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(entityIndex);
