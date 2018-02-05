import { connect } from 'react-redux';
import albumsIndex from './albums_index';

import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums } from '../../actions/albums_actions';

const mapStateToProps = (state, ownProps) => ({
  albums: Object.values(state.entities.albums),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(albumsIndex);
