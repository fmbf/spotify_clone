import { connect } from 'react-redux';
import songsIndex from './songs_index';
import { withRouter } from 'react-router-dom';
import { addSongToPlaylist } from '../../actions/songs_actions';
import { togglePlay, toggleRepeat, toggleMute, nextSong, prevSong, queueSongsReplace } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  let songs;

  if (ownProps.match.params.playlistId) {
    songs = Object.values(state.entities.playlists).filter(song => song.playlists_ids === parseInt(ownProps.match.params.playlistId));
  } else {
    songs = Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.match.params.albumId));
  }

  return {
    audio: state.playback,
    allSongs: state.entities.songs,
    songs,
    playlists: Object.values(state.entities.playlists).filter(playlist => playlist.author_id === state.session.currentUser.id),
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),

  togglePlay: () => dispatch(togglePlay()),
  queueSongsReplace: (songs) => dispatch(queueSongsReplace(songs)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(songsIndex));
