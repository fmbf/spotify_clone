import { connect } from 'react-redux';
import albumsIndex from './albums_index';

import { fetchAlbum, fetchAlbums } from '../../actions/albums_actions';

const mapStateToProps = (state, ownProps) => ({
  albums: Object.values(state.entities.albums),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(albumsIndex);
