import { connect } from 'react-redux';
import songsIndex from './songs_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let songs;

  if (ownProps.match.params.playlistId) {
    songs = Object.values(state.entities.playlists).filter(song => song.playlists_ids === parseInt(ownProps.match.params.playlistId));
    debugger
  } else {
    songs = Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.match.params.albumId));
  }

  return {
    songs,
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(songsIndex));
