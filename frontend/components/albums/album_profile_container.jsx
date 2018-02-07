import { connect } from 'react-redux';
import albumProfile from './album_profile';

import { fetchAlbum } from '../../actions/albums_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';
import { stateSongsArr } from '../../reducers/selectors';



const mapStateToProps = (state, ownProps) => {
  let album = state.entities.albums[ownProps.match.params.albumId];
  let artist = null;
  let songs = null;

  if (album) {

    songs = stateSongsArr(state.entities.songs);

  // } else {

  }

  return {
    album,
    artist,
    songs,
    // songs: Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.match.params.albumId)),
    // albums: Object.values(state.entities.albums),
    // currentUser: state.session.currentUser
  };
};




const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(albumProfile);
