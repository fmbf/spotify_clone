import { connect } from 'react-redux';
// import { fetchTrack, fetchTracks } from '../../actions/tracks';
// import { togglePlay, toggleRepeat, toggleMute, nextTrack } from '../../actions/audio';
import Player from "./player";

const mapStateToProps = (state) => {
  return {
    audio: state.entities.audio,
    songs: state.entities.songs,
    ui: state.entities.ui
};};

const mapDispatchToProps = (dispatch) => ({
  // fetchTrack: (id) => dispatch(fetchTrack(id)),
  // fetchTracks: () => dispatch(fetchTracks()),
  // togglePlay: () => dispatch(togglePlay()),
  // toggleMute: () => dispatch(toggleMute()),
  // toggleRepeat: () => dispatch(toggleRepeat()),
  // nextTrack: () => dispatch(nextTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
