import { connect } from 'react-redux';
import sidebar from './sidebar';

import { fetchPlaylist, fetchPlaylists } from '../actions/playlists_actions';
import { fetchArtist, fetchUserArtists, fetchArtistsByIds } from '../actions/artists_actions';
import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums, fetchAlbumsByIds } from '../actions/albums_actions';
import { fetchSong, fetchAllSongs } from '../actions/songs_actions';


const mapStateToProps = (state, ownProps) => ({
  playlists: Object.values(state.entities.playlists).filter(playlist => playlist.author_id === state.session.currentUser.id),
  // userAlbums: Object.values(state.entities.albums).filter(album => album.followers.includes(state.session.currentUser)),


  // playlists: Object.values(state.session.currentUser.playlists_ids),
  userAlbums: state.session.currentUser.albums_ids,
  userSongs: state.session.currentUser.songs_ids,



  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
  fetchArtistsByIds: (idsArr) => dispatch(fetchArtistsByIds(idsArr)),
  fetchArtistAlbums: (userId) => dispatch(fetchArtistAlbums(userId)),
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId)),
  fetchAlbumsByIds: (idsArr) => dispatch(fetchAlbumsByIds(idsArr)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  fetchAllSongs: () => dispatch(fetchAllSongs()),
});


export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
