import { connect } from 'react-redux';
import artistProfile from './artist_profile';


import { fetchAlbum, fetchArtistAlbums } from '../../actions/albums_actions';
import { fetchArtist, fetchArtists, fetchArtistsByIds } from '../../actions/artists_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';



const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  artist: state.entities.artists[ownProps.match.params.artistId],

  songs: Object.values(state.entities.songs).filter(song => song.artist_id === parseInt(ownProps.match.params.artistId)),
  albums: Object.values(state.entities.albums).filter(album => album.artist_id === parseInt(ownProps.match.params.artistId)),
});




const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  //fetchPlaylistByIds for seeing playlists that feature artist
});


export default connect(mapStateToProps, mapDispatchToProps)(artistProfile);
