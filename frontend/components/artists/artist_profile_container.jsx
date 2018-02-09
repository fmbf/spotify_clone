import { connect } from 'react-redux';
import artistProfile from './artist_profile';


import { fetchAlbum, fetchArtistAlbums } from '../../actions/albums_actions';
import { fetchArtist, fetchUserAlbums, fetchArtistsByIds } from '../../actions/artists_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong } from '../../actions/player_actions';





const mapStateToProps = (state, ownProps) => {
  let img_path;
  if (state.entities.albums[state.playback.albumId]) {
    img_path = state.entities.albums[state.playback.albumId].img_path;
  }


  return {
    audio: state.playback,
    tracks: state.entities.songs,
    img_path,

    currentUser: state.session.currentUser,
    artist: state.entities.artists[ownProps.match.params.artistId],
  };

};




const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlay: () => dispatch(togglePlay()),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  //fetchPlaylistByIds for seeing playlists that feature artist
});


export default connect(mapStateToProps, mapDispatchToProps)(artistProfile);
