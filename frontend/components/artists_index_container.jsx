import { connect } from 'react-redux';
import artistsIndex from './artists_index';

import { fetchArtist, fetchUserArtists } from '../actions/artists_actions';
import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums, fetchAlbumsByIds } from '../actions/albums_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong } from '../actions/player_actions';

import { fetchArtistSongs, fetchAlbumSongs } from '../actions/songs_actions';


const mapStateToProps = (state) => {
  let img_path;
  if (state.entities.albums[state.playback.albumId]) {
    img_path = state.entities.albums[state.playback.albumId].img_path;
  }

  return {
    artists: Object.values(state.entities.artists),
    currentUser: state.session.currentUser,
    audio: state.playback,
    tracks: state.entities.songs,
    img_path,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchAlbumsByIds: (artistId) => dispatch(fetchAlbumsByIds(artistId)),


  // fetchSong: (id) => dispatch(fetchSong(id)),
  // fetchSongs: () => dispatch(fetchSongs()),
  fetchArtistSongs: () => dispatch(fetchArtistSongs()),
  togglePlay: () => dispatch(togglePlay()),
  toggleMute: () => dispatch(toggleMute()),
  toggleRepeat: () => dispatch(toggleRepeat()),
  nextSong: () => dispatch(nextSong()),
  prevSong: () => dispatch(prevSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(artistsIndex);
