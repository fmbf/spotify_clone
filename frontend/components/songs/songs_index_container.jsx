import { connect } from 'react-redux';
import songsIndex from './songs_index';



const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    songs: Object.values(state.entities.songs).filter(song => song.album_id === parseInt(ownProps.album.id)),
    album: ownProps.album,
    // albums: Object.values(state.entities.albums),
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(songsIndex);
