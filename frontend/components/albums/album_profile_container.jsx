import { connect } from 'react-redux';
import albumProfile from './album_profile';

import { fetchAlbum } from '../../actions/albums_actions';
import { stateSongsArr } from '../../reducers/selectors';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong, queueSongsReplace } from '../../actions/player_actions';
import { fetchArtistSongs,
          fetchAlbumSongsInterrupt,
          fetchAlbumSongs } from '../../actions/songs_actions';


const mapStateToProps = (state, ownProps) => {
  let album = state.entities.albums[ownProps.match.params.albumId];
  let artist = null;
  let songs = null;

  if (album) {
    songs = stateSongsArr(state.entities.songs);
  }

  if (ownProps.match.params.playlistId) {
    songs = Object.values(state.entities.playlists).filter(song => song.playlists_ids === parseInt(ownProps.match.params.playlistId));
  } else {
    songs = Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.match.params.albumId));
  }

  return {
    album,
    artist,
    songs,
    audio: state.playback, // playback obj
    // songs: Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.match.params.albumId)),
    // albums: Object.values(state.entities.albums),
    currentUser: state.session.currentUser
  };
};




const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlay: () => dispatch(togglePlay()),
  queueSongsReplace: (songs) => dispatch(queueSongsReplace(songs)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId)),
  fetchAlbumSongsInterrupt: (albumId) => dispatch(fetchAlbumSongsInterrupt(albumId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(albumProfile);
