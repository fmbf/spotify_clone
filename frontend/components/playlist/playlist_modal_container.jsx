import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { createPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlists_actions';
import playlistModal from './playlist_modal';


const mapStateToProps = (state, ownProps) => ({
  clickedOpen: ownProps.clickedNewPlaylist,
});

const mapDispatchToProps = (dispatch, ownProps) => {

  let formType = ownProps.formType;

  const processForm = formType === 'edit' ? updatePlaylist : createPlaylist;

  return {
    processForm: playlist => dispatch(processForm(playlist)),
    formType
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(playlistModal));
