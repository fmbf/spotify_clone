import { connect } from 'react-redux';
import artistsIndex from './artists_index';

import { fetchArtist, fetchUserArtists } from '../../actions/artists_actions';
import { fetchArtistSongs, fetchAlbumSongs, fetchArtistSongsInterrupt } from '../../actions/songs_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong, queueSongsReplace } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  artists: Object.values(state.entities.artists),
  audio: state.playback,
  currentUser: state.session.currentUser,
  allSongs: state.entities.songs,
  // songs: Object.values(state.entities.songs).filter(song => song.artist_id === parseInt(ownProps.match.params.artistId))
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlay: () => dispatch(togglePlay()),
  queueSongsReplace: (songs) => dispatch(queueSongsReplace(songs)),
  fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  fetchArtistSongsInterrupt: (artistId) => dispatch(fetchArtistSongsInterrupt(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(artistsIndex);
