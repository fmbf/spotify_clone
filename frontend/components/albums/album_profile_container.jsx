import { connect } from 'react-redux';
import albumProfile from './album_profile';

import { fetchAlbum } from '../../actions/albums_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';



const mapStateToProps = (state, ownProps) => ({
  // songs: [1, 2, 3, 4, 5, 6, 7],
  songs: state.entities.songs[ownProps.match.params.albumId],
  album: state.entities.albums[ownProps.match.params.albumId],
  albums: Object.values(state.entities.albums),
  currentUser: state.session.currentUser
});




const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(albumProfile);
