import { connect } from 'react-redux';
import albumsIndex from './albums_index';

import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums, fetchAlbumsByIds } from '../../actions/albums_actions';


const mapStateToProps = (state, ownProps) => {

  let albums;

  if (ownProps && ownProps.match.params.artistId) {
    albums = Object.values(state.entities.albums).filter(
      album => album.artist_id === parseInt(ownProps.match.params.artistId)
    );
  } else {
      albums = Object.values(state.entities.albums).filter(
        album => state.session.currentUser.albums_ids.includes(album)
      );
      // albums = Object.values(state.entities.albums);
    }

  return {
    albums,
    album: ownProps.album,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId)),
  fetchAlbumsByIds: (IDsArr) => dispatch(fetchAlbumsByIds(IDsArr)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(albumsIndex);
