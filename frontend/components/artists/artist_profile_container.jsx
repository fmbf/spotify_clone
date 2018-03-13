import { connect } from 'react-redux';
import artistProfile from './artist_profile';


import { fetchAlbum, fetchArtistAlbums } from '../../actions/albums_actions';
import { fetchArtist, fetchUserAlbums, fetchArtistsByIds } from '../../actions/artists_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong, queueSongsReplace } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let img_path;
  let songs;

  if (state.entities.albums[state.playback.albumId]) {
    img_path = state.entities.albums[state.playback.albumId].img_path;
  }



  songs = Object.values(state.entities.songs).filter(song => song.artist_id === parseInt(ownProps.match.params.artistId));



  return {
    audio: state.playback,
    songs,
    img_path,

    currentUser: state.session.currentUser,
    artist: state.entities.artists[ownProps.match.params.artistId],
  };

};




const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlay: () => dispatch(togglePlay()),
  queueSongsReplace: (songs) => dispatch(queueSongsReplace(songs)),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  //fetchPlaylistByIds for seeing playlists that feature artist
});


export default connect(mapStateToProps, mapDispatchToProps)(artistProfile);
