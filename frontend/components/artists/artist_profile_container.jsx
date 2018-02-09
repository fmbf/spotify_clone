import { connect } from 'react-redux';
import artistProfile from './artist_profile';


import { fetchAlbum, fetchArtistAlbums } from '../../actions/albums_actions';
import { fetchArtist, fetchUserAlbums, fetchArtistsByIds } from '../../actions/artists_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';





const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    artist: state.entities.artists[ownProps.match.params.artistId],
  };

};




const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  //fetchPlaylistByIds for seeing playlists that feature artist
});


export default connect(mapStateToProps, mapDispatchToProps)(artistProfile);
