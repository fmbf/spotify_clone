import { connect } from 'react-redux';
import albumsIndex from './albums_index';

import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums } from '../../actions/albums_actions';

// const mapStateToProps = (state, ownProps) => ({
//   albums: Object.values(state.entities.albums),
//   currentUser: state.session.currentUser
// });

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    albums: Object.values(state.entities.albums).filter(album => album.artist_id === parseInt(ownProps.match.params.artistId)),
    userAlbums: Object.values(state.entities.albums).filter(album => [1, 2, 6, 10, 15, 29].includes(album.id)), // TEMP
    album: ownProps.album,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(albumsIndex);
