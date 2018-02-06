import { connect } from 'react-redux';
import artistsIndex from './artists_index';

import { fetchArtist, fetchArtists } from '../../actions/artists_actions';

const mapStateToProps = (state, ownProps) => ({
  artists: Object.values(state.entities.artists),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtists: (userId) => dispatch(fetchArtists(userId)),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(artistsIndex);
