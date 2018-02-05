import { connect } from 'react-redux';
import songsIndex from './songs_index';



const mapStateToProps = (state, ownProps) => ({
  // songs: state.entities.songs[ownProps.match.params.albumId],
  // album: state.entities.albums[ownProps.match.params.albumId],
  // albums: Object.values(state.entities.albums),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(songsIndex);
