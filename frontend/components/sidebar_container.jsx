import { connect } from 'react-redux';
import sidebar from './sidebar';

import { fetchPlaylist, fetchPlaylists } from '../actions/playlists_actions';
import { fetchArtist, fetchArtists } from '../actions/artists_actions';
import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums } from '../actions/albums_actions';
import { fetchSong } from '../actions/songs_actions';


const mapStateToProps = (state, ownProps) => ({
  playlists: Object.values(state.entities.playlists).filter(playlist => playlist.author_id === state.session.currentUser.id),

  // TEMP:
  userAlbums: [1, 2, 6, 10, 15, 29],
  userSongs: [50, 40, 36, 55],
  ////////////////////


  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  fetchArtists: (userId) => dispatch(fetchArtists(userId)),
  fetchArtistAlbums: (userId) => dispatch(fetchArtistAlbums(userId)),
  fetchUserAlbums: (userId) => dispatch(fetchArtistAlbums(userId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  fetchSong: (songId) => dispatch(fetchSong(songId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
