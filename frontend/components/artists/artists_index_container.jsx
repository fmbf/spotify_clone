import { connect } from 'react-redux';
import artistsIndex from './artists_index';

import { fetchArtist, fetchUserArtists } from '../../actions/artists_actions';
import { fetchArtistSongs, fetchAlbumSongs } from '../../actions/songs_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  artists: Object.values(state.entities.artists),
  audio: state.playback,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlay: () => dispatch(togglePlay()),
  fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(artistsIndex);
